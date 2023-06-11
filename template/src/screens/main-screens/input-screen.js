import React from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import Text from '~/components/library/text';
import TextInput from '~/components/library/text-input';

const InputScreen = () => {
    return (
        <View style={tw`flex-1 flex flex-col`}>
            <Text>InputScreen</Text>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="this is placeholder"
                    bordered
                    large
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="this is placeholder"
                    bordered
                    large
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="this is placeholder"
                    stacked
                    large
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="Enter Password"
                    large
                    type="password"
                    bordered
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="Enter Password"
                    large
                    type="password"
                    bordered
                    disabled
                />
            </View>
        </View>
    );
};

export default InputScreen;
