import {
    StackActions,
    createNavigationContainerRef,
} from '@react-navigation/native';
import { useRef } from 'react';

import { CONTAINER_SET_CURRENT_SCREEN_NAME } from '~/constants/action-types';
import { ERROR_SCREEN } from '~/constants/navigation-constant';
import {
    ERROR_ROUTE,
    LOGIN_ROUTE,
    SECURE_ROUTES,
} from '~/constants/special-navigation-constant';

import store from '~/reducers/store';

export const navigationRef = createNavigationContainerRef();

export const ScreenListener = () => {
    //* when the navigator loads then prints the screen name for first time
    if (__DEV__) {
        setTimeout(() => {
            if (navigationRef.isReady()) {
                console.log(
                    `%c Navigated To --> ${
                        navigationRef?.getCurrentRoute()?.name
                    }`,
                    'color:red;padding:2px;border:2px solid black'
                );
            }
        }, 0);
    }

    navigationRef.addListener('state', () => {
        if (navigationRef.isReady()) {
            console.log(
                `%c Navigated To --> ${navigationRef?.getCurrentRoute()?.name}`,
                'color:red;padding:2px;border:2px solid black'
            );
            store.dispatch({
                type: CONTAINER_SET_CURRENT_SCREEN_NAME,
                screen_name: navigationRef.getCurrentRoute().name,
            });
        }
    });
};

export const SetScreenName = (from, data) => {
    // if (from === 'screen_listener') {
    //     // const current_screen_name = navigationRef.getCurrentRoute().name;
    //     const new_screen_name = data.state.routes[data.state.index].name;
    //     if (
    //         SECURE_ROUTES.includes(new_screen_name) &&
    // !store.getState().auth_store.is_login
    //     ) {
    //         navigationRef.current.dispatch(StackActions.replace(LOGIN_SCREEN));
    //     }
    // } else {
    //     if (navigationRef.isReady()) {
    //         store.dispatch({
    //             type: CONTAINER_SET_CURRENT_SCREEN_NAME,
    //             screen_name: navigationRef.getCurrentRoute().name,
    //         });
    //     }
    // }

    if (navigationRef.isReady()) {
        store.dispatch({
            type: CONTAINER_SET_CURRENT_SCREEN_NAME,
            screen_name: navigationRef.getCurrentRoute().name,
        });
    }
};

export const navigate = (name, params, replace) => {
    if (navigationRef.isReady()) {
        if (
            SECURE_ROUTES.includes(name) &&
            !store.getState().auth_store.is_login
        ) {
            navigationRef.current.dispatch(StackActions.replace(LOGIN_ROUTE));
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
            : ERROR_SCREEN;
    }
};

export const useLocation = () => {
    let location = useRef().current;
    location = store.getState().container_store.current_screen;

    // useFocusEffect(
    //     useCallback(() => {
    //         if (navigationRef.isReady()) {
    //             const screen_name = navigationRef.getCurrentRoute().name;
    //             console.log('SCREEN', screen_name);
    //             setLocation(screen_name);
    //         } else {
    //             setTimeout(() => {
    //                 const screen_name = navigationRef.getCurrentRoute().name;
    //                 setLocation(screen_name);
    //             }, 0);
    //         }
    //     }, [])
    // );

    // a global event listener if there is any change in the screen route so it will fire all the useLocation hook and hydrate with the update value
    // remember that it has a huge-overhead as we know that react navigation works on the stack so all the screens present in the stack will be re-rendered
    // useEffect(() => {
    //     const unsubscribe = navigationRef.addListener('state', () => {
    //         console.log('state is', navigationRef.getCurrentRoute().name);
    //         setRoute(navigationRef.getCurrentRoute().name);
    //     });
    //     return () => {
    //         console.log('unmounts');
    //         unsubscribe();
    //     };
    // },[]);

    const setLocation = (route, params, replace) => {
        navigate(route, params, replace);
        location = navigationRef.isReady()
            ? navigationRef.getCurrentRoute().name
            : ERROR_ROUTE;
    };

    return { location, setLocation };
};
