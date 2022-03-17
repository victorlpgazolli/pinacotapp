import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, setEventAsSaved, } from '../store/features/events';
import { categoriesSelector, eventsPerCategorySelector, eventsSelector, savedEventsSelector } from '../store/features/events/selectors';
import useDebounce from './useDebounce';

export const useEventsActions = () => {
    const dispatch = useDispatch()

    const getEvents = useCallback(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    const saveEvent = useCallback(({ name }) => {
        dispatch(setEventAsSaved(name));
    }, [dispatch])

    return {
        getEvents,
        saveEvent
    }
};


export const useEvents = () => {
    const events = useSelector(eventsSelector);
    const actions = useEventsActions();

    return {
        ...actions,
        events,
    }
};

export const useSavedEvents = () => {
    const savedEvents = useSelector(savedEventsSelector);
    const savedEventsByName = useMemo(() => {
        return savedEvents.reduce((acc, event) => {
            acc[event.name] = event;
            return acc;
        }, {})
    }, [savedEvents])
    console.log({ savedEventsByName });
    return {
        savedEvents,
        savedEventsByName
    }
};

export const useIsEventSaved = (event) => {
    const {
        savedEventsByName
    } = useSavedEvents();

    const isEventSaved = useMemo(
        () => savedEventsByName[event.name],
        [savedEventsByName, event]
    );

    return !!isEventSaved;
};

export const useEventsPerCategory = () => {
    const eventsPerCategory = useSelector(eventsPerCategorySelector);
    const categories = useSelector(categoriesSelector);

    const actions = useEventsActions();

    return {
        ...actions,
        eventsPerCategory,
        categories,
    }
}


export const useEventsPerFilter = () => {
    const events = useSelector(eventsSelector);
    const [textSearched, setTextSearched] = useState("")
    const [categoryNameSelected, setCategorynameSelected] = useState("")

    const filteredEvents = useMemo(() => {
        const hasText = textSearched.length > 0;
        const hasCategory = categoryNameSelected.length > 0;

        const hasRequiredValuesForFilter = !!hasText || !!hasCategory;

        if (!hasRequiredValuesForFilter) return events;
        const eventsWithSameName = events.filter(
            event =>
                (hasText && event.name.toLowerCase().match(textSearched.toLowerCase())) ||
                (hasCategory && event.categories.toLowerCase().match(categoryNameSelected.toLowerCase()))
        );

        return eventsWithSameName;

    }, [events, textSearched, categoryNameSelected])

    const onTextSearch = useDebounce((text) => setTextSearched(text), 1000);
    const onCategorySearch = useDebounce((categoryName) => setCategorynameSelected(categoryName), 1000);

    return {
        onTextSearch,
        onCategorySearch,
        events: filteredEvents,
        categoryNameSelected,
        textSearched,
    }
};