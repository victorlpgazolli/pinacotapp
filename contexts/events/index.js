import { createContext, useCallback, useEffect, useState } from "react";
import { spreadsheetApi } from "../../services/api";

const defaultValues = {
    events: [],
}

export const EventsContext = createContext(defaultValues)

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const loadEvents = useCallback(async () => {

        const events = await spreadsheetApi.get()

        setEvents(events)

    }, [setEvents]);

    useEffect(() => {
        loadEvents()
    }, [])

    return (
        <EventsContext.Provider value={{
            events,
            loadEvents
        }}>
            {children}
        </EventsContext.Provider>
    )
}