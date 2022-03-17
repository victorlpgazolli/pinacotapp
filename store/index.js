

import { configureStore } from '@reduxjs/toolkit'
import events from './features/events';
import user from './features/user';


export const store = configureStore({
    reducer: {
        events,
        user
    },
})