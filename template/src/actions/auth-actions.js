import {
    AUTH_SET_SIGNIN_DETAILS,
    AUTH_SET_SIGNUP_DETAILS,
} from '~/constants/action-types';

export const AuthSetSignupDetails = (key, value) => ({
    type: AUTH_SET_SIGNUP_DETAILS,
    key,
    value,
});

export const AuthSetSigninDetails = (key, value) => ({
    type: AUTH_SET_SIGNIN_DETAILS,
    key,
    value,
});
