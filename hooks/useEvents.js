import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/features/events';
import { categoriesSelector, eventsPerCategorySelector, eventsSelector } from '../store/features/events/selectors';
import useDebounce from './useDebounce';

export const useEventsActions = () => {
    const dispatch = useDispatch()

    const getEvents = useCallback(() => {
        dispatch(fetchEvents());
    }, [dispatch])

    return {
        getEvents
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