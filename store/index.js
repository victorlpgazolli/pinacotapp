

import { configureStore } from '@reduxjs/toolkit'
import events from './features/events';


export const store = configureStore({
    reducer: {
        events
    },
})