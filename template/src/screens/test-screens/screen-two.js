import React, { memo } from 'react';
import { View } from 'react-native';
import { SCREEN_THREE } from '~/navigation/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

import { useLocation } from '~/hooks/useLocation';

const ScreenTwo = () => {
    const [location, setLocation] = useLocation();
    return (
        <View style={tw``}>
            <Text>ScreenTwo</Text>
            <Button onPress={() => setLocation(SCREEN_THREE)}>ScreenTwo</Button>
        </View>
    );
};

export default memo(ScreenTwo);
