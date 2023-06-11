import {
    StackActions,
    createNavigationContainerRef,
    useFocusEffect,
} from '@react-navigation/native';
import { useCallback, useState } from 'react';
import {
    ERROR_SCREEN,
    LOGIN_SCREEN,
    SECURE_ROUTES,
} from '~/navigation/navigation-constant';

import { CONTAINER_SET_CURRENT_SCREEN_NAME } from '~/actions/types';

import store from '~/reducers/store';

export const navigationRef = createNavigationContainerRef();

export const SetScreenName = (from, data) => {
    if (from === 'screen_listener') {
        // const current_screen_name = navigationRef.getCurrentRoute().name;
        const new_screen_name = data.state.routes[data.state.index].name;
        if (
            SECURE_ROUTES.includes(new_screen_name) &&
            !store.getState().auth_store.is_login
        ) {
            navigationRef.current.dispatch(StackActions.replace(LOGIN_SCREEN));
        }
    } else {
        if (navigationRef.isReady()) {
            store.dispatch({
                type: CONTAINER_SET_CURRENT_SCREEN_NAME,
                screen_name: navigationRef.getCurrentRoute().name,
            });
        }
    }
};

export const navigate = (name, params, replace) => {
    if (navigationRef.isReady()) {
        if (
            SECURE_ROUTES.includes(name) &&
            !store.getState().auth_store.is_login
        ) {
            navigationRef.current.dispatch(StackActions.replace(LOGIN_SCREEN));
            SetScreenName();
        } else if (navigationRef.getRootState().routeNames.includes(name)) {
            //if the redirection to the the product-detail page then push it to the stack
            if (!!replace) {
                navigationRef.current.dispatch(
                    StackActions.replace(name, params)
                );
                SetScreenName();
            }

            //replace the stack with the new upcoming route
            else {
                navigationRef.navigate(name, params);
                SetScreenName();
            }
        } else {
            navigationRef.navigate(ERROR_SCREEN); // if the route is not present then redirect to the ErrorScreen
            SetScreenName();
        }
        console.log(
            '<-- Navigated To -->',
            navigationRef.isReady() && navigationRef.getCurrentRoute().name
        );
        return navigationRef.isReady()
            ? navigationRef.getCurrentRoute().name
            : 'Error';
    }
};

export const useLocation = () => {
    const [location, setRoute] = useState();
    useFocusEffect(
        useCallback(() => {
            if (navigationRef.isReady()) {
                const screen_name = navigationRef.getCurrentRoute().name;
                setRoute(screen_name);
            } else {
                setTimeout(() => {
                    const screen_name = navigationRef.getCurrentRoute().name;
                    setRoute(screen_name);
                }, 0);
            }
        }, [])
    );

    const setLocation = (route, params, replace) => {
        setRoute(navigate(route, params, replace));
    };

    return [location, setLocation];
};
