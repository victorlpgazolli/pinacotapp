import { createSlice } from '@reduxjs/toolkit'
import { findEventByExactName } from '../../../helpers/find'
import { getUniqueCategoriesFromEvents } from '../../../helpers/parser'
import {
    fetchEvents
} from './actions'


const initialState = {
    events: [],
    categories: [],
    saved: [],
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEventAsSaved: (state, {
            payload: eventName,
        }) => {
            const findEventByname = findEventByExactName(eventName);

            const event = state.events.find(findEventByname);

            if (!event) return;

            const savedEventIndex = state.saved.findIndex(findEventByname);

            const hasToAdd = savedEventIndex === -1;

            if (hasToAdd) {
                state.saved.push(event);
                return;
            }

            state.saved.splice(savedEventIndex, 1);
        }
    },
    extraReducers: {
        [fetchEvents.fulfilled]: (state, {
            payload: events,
        }) => {
            state.events = events;

            const uniqueCategories = getUniqueCategoriesFromEvents(events);

            state.categories = uniqueCategories;
        },

    }
})


const {
    setEventAsSaved
} = eventsSlice.actions;

export {
    fetchEvents,
    setEventAsSaved
}

export default eventsSlice.reducer