import React, { memo } from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import Text from '~/components/library/text';

const ScreenFive = () => {
    return (
        <View style={tw``}>
            <Text>ScreenFive</Text>
        </View>
    );
};

export default memo(ScreenFive);
