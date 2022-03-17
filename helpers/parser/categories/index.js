export const getUniqueCategoriesFromEvents = (events) => {
    const listOfAllEventsCategories = events.reduce((acc, event) => {
        const categoriesFromEvent = getCategoriesFromEvent(event);
        return acc.concat(...categoriesFromEvent)
    }, []);

    const uniqueCategories = [...new Set(listOfAllEventsCategories)];

    return uniqueCategories;
}
export const getCategoriesFromEvent = (event) => {
    const categoriesFromEvent = event.categories.split(",");
    return categoriesFromEvent;
}


export const getEventsPerCategory = (events) => {
    const eventsPerCategory = events.reduce((acc, event) => {
        const eventCategories = getCategoriesFromEvent(event);

        eventCategories.forEach(category => {
            if (!acc[category]) acc[category] = [];
            acc[category].push(event);
        })
        return acc;

    }, {})

    return eventsPerCategory;
}