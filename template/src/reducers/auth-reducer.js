import { USER_SET_LOGIN, USER_SET_LOGOUT } from '~/actions/types';

export const INITIAL_STATE = {
    is_login: null,
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);
    if (action.type === USER_SET_LOGIN) {
        newState.is_login = true;
        return newState;
    }
    if (action.type === USER_SET_LOGOUT) {
        newState.is_login = false;
        return newState;
    }
    return state;
};
