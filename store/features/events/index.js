import { createSlice } from '@reduxjs/toolkit'
import { getUniqueCategoriesFromEvents } from '../../../helpers/parser'
import {
    fetchEvents
} from './actions'


const initialState = {
    events: [],
    categories: [],
}

export const eventsSlice = createSlice({
    name: 'coach',
    initialState,
    reducers: {
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


export { fetchEvents }

export default eventsSlice.reducer