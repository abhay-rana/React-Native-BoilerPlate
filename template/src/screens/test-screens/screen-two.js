import { memo } from 'react';
import { View } from 'react-native';
import { SCREEN_THREE } from '~/constants/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

import { useLocation } from '~/hooks/useLocation';

const ScreenTwo = (route, params) => {
    const { setLocation } = useLocation();
    console.log('rendered screen two***');
    console.log(route.params);
    return (
        <View style={tw``}>
            <Text style={tw``}>ScreenTwo</Text>
            <Button onPress={() => setLocation(SCREEN_THREE)}>ScreenTwo</Button>
        </View>
    );
};

export default memo(ScreenTwo);
