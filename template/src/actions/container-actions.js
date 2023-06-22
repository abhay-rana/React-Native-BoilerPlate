import { CONTAINER_SET_CONTROLS } from '~/constants/action-types';

export const ContainerSetControls = (controls) => ({
    type: CONTAINER_SET_CONTROLS,
    controls,
});
