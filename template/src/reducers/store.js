import AsyncStorage from '@react-native-async-storage/async-storage';
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

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
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

const middlewares = [
    applyMiddleware(thunk),
    // offline(custom_config),
    // sentryReduxEnhancer,
];

const enhancer = composeEnhancers(...middlewares);
export const store = createStore(persist_reducer, enhancer);
export const persistor = persistStore(store);

export default store;
