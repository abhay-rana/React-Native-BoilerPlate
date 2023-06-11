import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import {
    CHECKBOX_SCREEN,
    INPUT_SCREEN,
    RADIO_SCREEN,
    TEXT_SCREEN,
    TOAST_SCREEN,
} from '~/navigation/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';

const ComponentScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`flex-1 flex-col gap-3`}>
            <Button
                onPress={() => navigation.navigate(CHECKBOX_SCREEN)}
                variant="primary"
            >
                CheckboxScreen
            </Button>
            <Button
                onPress={() => navigation.navigate(TEXT_SCREEN)}
                variant="secondary"
            >
                TestScreen
            </Button>
            <Button
                onPress={() => navigation.navigate(INPUT_SCREEN)}
                variant="danger"
            >
                InputScreen
            </Button>
            <Button
                onPress={() => navigation.navigate(TOAST_SCREEN)}
                style={tw`bg-blue-300`}
            >
                ToastScreen
            </Button>
            <Button
                onPress={() => navigation.navigate(RADIO_SCREEN)}
                style={tw`bg-blue-300`}
            >
                RadioScreen
            </Button>
        </View>
    );
};

export default ComponentScreen;
