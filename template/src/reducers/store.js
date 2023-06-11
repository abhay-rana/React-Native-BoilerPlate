import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { REHYDRATION_SET_REHYDRATION_VALUE } from '~/actions/types';

import { AuthReducer } from '~/reducers/auth-reducer';
import { ContainerReducer } from '~/reducers/container-reducer';
// import { CounterReducer } from '~/reducers/counter-reducer';
import { RehydrationReducer } from '~/reducers/rehydration-reducer';

import { APP_MODE } from '~/env';

const reducers = combineReducers({
    rehydration_store: RehydrationReducer,
    container_store: ContainerReducer,
    auth_store: AuthReducer,
    // counter_store: CounterReducer,
});

let custom_config = {
    ...offlineConfig,
    persistOptions: {
        key: 'root',
        // whitelist: []
        blacklist: ['rehydration_store', 'another_store'],
    },
    persistCallback: () => {
        // setting is_rehydration value so that our screen renders when rehydration completes
        store.dispatch({ type: REHYDRATION_SET_REHYDRATION_VALUE });
    },
};

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
    offline(custom_config),
    // sentryReduxEnhancer,
];

const enhancer = composeEnhancers(...middlewares);

const store = createStore(reducers, enhancer);

export default store;
