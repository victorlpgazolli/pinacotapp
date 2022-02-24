import { useContext, } from 'react';
import { EventsContext } from '../contexts';

export default function useEvents() {
    const context = useContext(EventsContext);

    return context
}
