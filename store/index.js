

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import events from './features/events';
import user from './features/user';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const reducers = combineReducers({
    events,
    user
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ["events"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})


export {
    store
}