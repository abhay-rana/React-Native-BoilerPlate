import {
    COMMON_RESET_LOCAL_STATE,
    CONTAINER_SET_CONTROLS,
} from '~/constants/action-types';

export const ContainerSetControls = (controls) => ({
    type: CONTAINER_SET_CONTROLS,
    controls,
});

export const CommonResetLocalState = () => ({
    type: COMMON_RESET_LOCAL_STATE,
});
