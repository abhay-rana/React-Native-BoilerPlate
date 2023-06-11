import { CONTAINER_SET_CONTROLS } from '~/actions/types';

export const ContainerSetControls = (controls) => ({
    type: CONTAINER_SET_CONTROLS,
    controls,
});
