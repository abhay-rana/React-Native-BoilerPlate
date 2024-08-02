import React, { useState } from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import Checkbox from '~/components/library/checkboox';
import Text from '~/components/library/text';

const CheckboxScreen = () => {
    const [state, setState] = useState(false);
    const handleCheckbox = () => {
        console.log('pressed');
        setState(!state);
    };
    console.log(state);
    return (
        <View>
            <Text style={tw`text-center mb-5`}>CheckboxScreen</Text>
            <Checkbox
                direction="left"
                label="Left Checkbox"
                onPress={handleCheckbox}
                checkColor="red"
                checked={state} // or false, depending on the desired initial state
            />
            <Checkbox
                direction="right"
                label="Right Checkbox"
                onPress={handleCheckbox}
                checkColor="#234"
                checked={state} // or false, depending on the desired initial state
                gap={16}
            />
            <Checkbox
                direction="right"
                label="Right Checkbox"
                onPress={handleCheckbox}
                checkColor="#234"
                checked={state} // or false, depending on the desired initial state
                gap={16}
                style={tw`p-4 gap-20`}
            />
            <Checkbox
                direction="right"
                label="Right Checkbox"
                onPress={handleCheckbox}
                checkColor="#234"
                checked={state} // or false, depending on the desired initial state
                gap={16}
                style={tw`p-4 gap-20 bg-gray-300`}
            />
            <Checkbox
                direction="right"
                label="Right Checkbox"
                onPress={handleCheckbox}
                checkColor="#234"
                checked={state} // or false, depending on the desired initial state
                gap={16}
                disabled
                style={tw`p-4 gap-20 bg-gray-300`}
            />
        </View>
    );
};

export default CheckboxScreen;
