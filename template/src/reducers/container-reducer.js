import { TAB_FOOTER_SCREENS } from '~/navigation/navigation-constant';

import {
    CONTAINER_SET_CONTROLS,
    CONTAINER_SET_CURRENT_SCREEN_NAME,
} from '~/actions/types';

const INITIAL_STATE = {
    show_tab_footer: false,
    current_screen: null,
    tab_name: 'all',
};

export const ContainerReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);
    if (action.type === CONTAINER_SET_CONTROLS) {
        newState.show_tab_footer = action.controls.show_tab_footer;
        newState.tab_name = action.controls.tab_name ?? 'all';
        return newState;
    }
    if (action.type === CONTAINER_SET_CURRENT_SCREEN_NAME) {
        newState.current_screen = action.screen_name;
        newState.show_tab_footer = TAB_FOOTER_SCREENS.includes(
            action.screen_name
        );
        return newState;
    }
    return state;
};
