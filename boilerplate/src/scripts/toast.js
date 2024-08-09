import React from 'react';
import Toast from 'react-native-toast-message';

import CustomToast from '~/components/library/custom-toast';

const Alertify = {
    success: (alert_text) => {
        if (typeof alert_text !== 'string') {
            console.error('Alertify.success expects a string as alert_text');
            return;
        }
        Toast.show({
            type: 'success',
            text1: alert_text,
            swipeable: false,
            position: 'bottom',
            bottomOffset: 60,
        });
    },
    error: (alert_text) => {
        if (typeof alert_text !== 'string') {
            console.error('Alertify.error expects a string as alert_text');
            return;
        }
        Toast.show({
            type: 'error',
            text1: alert_text,
            swipeable: false,
            position: 'bottom',
            bottomOffset: 60,
        });
    },
    default: (alert_text, action) => {
        if (typeof alert_text !== 'string') {
            console.error('Alertify.default expects a string as alert_text');
            return;
        }
        Toast.show({
            type: 'default',
            text1: alert_text,
            swipeable: false,
            position: 'bottom',
            bottomOffset: 60,
            props: action,
        });
    },
};

export const config = {
    success: (internalState) => (
        <CustomToast success message={internalState.text1} />
    ),
    error: (internalState) => (
        <CustomToast error message={internalState.text1} />
    ),
    default: (internalState) => (
        <CustomToast message={internalState.text1} {...internalState.props} />
    ),
};

export default Alertify;
