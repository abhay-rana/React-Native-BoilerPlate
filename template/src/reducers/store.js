import AsyncStorage from '@react-native-async-storage/async-storage';
import { MMKV } from 'react-native-mmkv';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import { AuthReducer } from '~/reducers/auth-reducer';
import { ContainerReducer } from '~/reducers/container-reducer';
import { RehydrationReducer } from '~/reducers/rehydration-reducer';

import { APP_MODE } from '~/env';

const combine_reducers = combineReducers({
    rehydration_store: RehydrationReducer,
    container_store: ContainerReducer,
    auth_store: AuthReducer,
});

if (!__DEV__) {
    var storage = new MMKV();
}

const middlewares = [
    thunk,
    // offline(custom_config),
    // sentryReduxEnhancer,
];

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
    import('react-native-mmkv-flipper-plugin').then(
        ({ initializeMMKVFlipper }) =>
            initializeMMKVFlipper({ default: storage })
    );
}

const reduxStorage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: (key) => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: (key) => {
        storage.delete(key);
        return Promise.resolve();
    },
};

const persistConfig = {
    key: 'root',
    // mmkv storage engine does not works with the remote debugging so you can use the "AsyncStorage"
    storage: __DEV__ ? AsyncStorage : reduxStorage,
    blacklist: ['rehydration_store'],
};

const persist_reducer = persistReducer(persistConfig, combine_reducers);

// const sentryReduxEnhancer = SentryLogger.createReduxEnhancer({
//     // Optionally pass options listed below
// });

let composeEnhancers;

if (APP_MODE === 'development') {
    composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                  //   trace: true, trace will be impact in performance so make it commented if you don't need it
              })
            : compose;
} else composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export const store = createStore(persist_reducer, enhancer);
export const persistor = persistStore(store);

export default store;
