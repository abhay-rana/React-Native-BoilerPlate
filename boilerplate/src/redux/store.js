import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from '~/redux/slices/auth-slice';

import { APP_MODE } from '~/env';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth_store', 'profile_store'],
};

const reducers = combineReducers({
    auth_store: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: APP_MODE === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
            immutableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
