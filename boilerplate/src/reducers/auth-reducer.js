import {
    AUTH_SET_SIGNIN_DETAILS,
    AUTH_SET_SIGNUP_DETAILS,
    COMMON_RESET_LOCAL_STATE,
    LOGOUT,
    USER_SET_LOGIN,
} from '~/constants/action-types';

const STORED_STATE = {
    is_login: false,
    fcm_token: '',
    auth_token: '',
    otp_token: '',
    user_signin_details: {
        name: '',
        city: '',
        mobile_number: '',
    },
};
const LOCAL_STATE = {
    user_signup_details: {
        name: '',
        city: '',
        mobile_number: '',
        hobbies: '',
        intrested_in: '',
    },
};
export const INITIAL_STATE = {
    ...JSON.parse(JSON.stringify(LOCAL_STATE)),
    ...JSON.parse(JSON.stringify(STORED_STATE)),
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);

    if (action.type === LOGOUT) {
        return INITIAL_STATE;
    }
    if (action.type === COMMON_RESET_LOCAL_STATE) {
        return { ...state, ...LOCAL_STATE };
    }
    if (action.type === USER_SET_LOGIN) {
        newState.is_login = true;
        return newState;
    }

    if (action.type === AUTH_SET_SIGNUP_DETAILS) {
        newState.user_signup_details = {
            ...state.user_signup_details,
            [action.key]: action.value,
        };
        return newState;
    }
    if (action.type === AUTH_SET_SIGNIN_DETAILS) {
        newState.user_signin_details = {
            ...state.user_signin_details,
            [action.key]: action.value,
        };
        return newState;
    }
    return state;
};
