import React, { memo } from 'react';
import { View } from 'react-native';
import { SCREEN_TWO } from '~/constants/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

import { useLocation } from '~/hooks/useLocation';

const ScreenOne = () => {
    const [location, setLocation] = useLocation();
    return (
        <View style={tw`flex-1`}>
            <Text style={tw`font-401`}>ScreenOne</Text>
            <Button onPress={() => setLocation(SCREEN_TWO)}>ScreenTwo</Button>
        </View>
    );
};

export default memo(ScreenOne);
