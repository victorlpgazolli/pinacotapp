import { createSelector } from "@reduxjs/toolkit";
import { getEventsPerCategory } from "../../../../helpers/parser";

export const eventsSelector = state => state.events.events;
export const savedEventsSelector = state => state.events.saved;
export const categoriesSelector = state => state.events.categories;

export const eventsPerCategorySelector = createSelector(
    eventsSelector,
    (events) => {

        const eventsPerCategory = getEventsPerCategory(events);

        return eventsPerCategory;
    }
)