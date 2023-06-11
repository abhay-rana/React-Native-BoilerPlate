import React, { memo } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';

import Alertify from '~/scripts/toast';

const ToastScreen = () => {
    const showToast = (type) => {
        if (type === 'success') {
            Alertify.success('hello abhay');
        } else if (type === 'error') {
            Alertify.error('this is error');
        } else if (type === 'default') {
            Alertify.default('this is default');
        }
    };

    return (
        <View style={tw`flex-1`}>
            <View style={tw`mt-4`}>
                <Button variant="primary" onPress={() => showToast('success')}>
                    This is success toast
                </Button>
            </View>
            <View style={tw`mt-4`}>
                <Button variant="danger" onPress={() => showToast('error')}>
                    This is error toast
                </Button>
            </View>
            <View style={tw`mt-4`}>
                <Button variant="primary" onPress={() => showToast('default')}>
                    This is normal toast
                </Button>
            </View>
        </View>
    );
};

export default memo(ToastScreen);
