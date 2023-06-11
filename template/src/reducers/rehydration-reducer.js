import { REHYDRATION_SET_REHYDRATION_VALUE } from '~/actions/types';

const INITIAL_STATE = {
    is_rehydrated: false,
};

export const RehydrationReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);

    if (action.type === REHYDRATION_SET_REHYDRATION_VALUE) {
        newState.is_rehydrated = true;
        return newState;
    }

    return state;
};
