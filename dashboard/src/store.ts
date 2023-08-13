import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer: rootReducer,
});

export default store;
