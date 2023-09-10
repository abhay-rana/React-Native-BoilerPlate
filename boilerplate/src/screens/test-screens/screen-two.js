import * as Sentry from '@sentry/react-native';
import { memo } from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import { SCREEN_THREE } from '~/constants/navigation-constant';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

import { useLocation } from '~/hooks/useLocation';

const ScreenTwo = (route, params) => {
    const { setLocation } = useLocation();
    console.log('rendered screen two***');
    console.log(route.params);

    function nativeCrash() {
        Sentry.nativeCrash();
    }

    return (
        <View style={tw``}>
            <Text style={tw``}>ScreenTwo</Text>
            <Button onPress={nativeCrash}>Native Crash</Button>
            <Button onPress={() => setLocation(SCREEN_THREE)}>ScreenTwo</Button>
        </View>
    );
};

export default memo(ScreenTwo);
