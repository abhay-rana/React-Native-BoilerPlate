import React, { memo, useState } from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import RadioGroup, { Radio } from '~/components/library/radio';
import Text from '~/components/library/text';

const RadioScreen = () => {
    const [language, setLanguage] = useState('');
    const handleRadio = (value) => {
        console.log(value);
        setLanguage(value);
    };
    return (
        <View style={tw`flex flex-col gap-4`}>
            <Text style={tw`text-center`}>Radio Component Screen</Text>
            <View style={tw``}>
                <RadioGroup
                    value={language}
                    onPress={(value) => handleRadio(value)}
                >
                    <Radio value="html" label="HTML" />
                    <Radio value="css" label="CSS" />
                    <Radio value="javascript" label="JAVASCRIPt" />
                </RadioGroup>
            </View>
        </View>
    );
};

export default memo(RadioScreen);
