import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { enableScreens } from 'react-native-screens';
import {
    CHECKBOX_SCREEN,
    COMPONENT_SCREEN,
    INPUT_SCREEN,
    RADIO_SCREEN,
    SCREEN_FIVE,
    SCREEN_FOUR,
    SCREEN_ONE,
    SCREEN_THREE,
    SCREEN_TWO,
    TEXT_SCREEN,
    TOAST_SCREEN,
} from '~/navigation/navigation-constant';

import CheckboxScreen from '~/screens/main-screens/checkbox-screen';
import ComponentScreen from '~/screens/main-screens/component-screen';
import InputScreen from '~/screens/main-screens/input-screen';
import RadioScreen from '~/screens/main-screens/radio-screen';
import TextScreen from '~/screens/main-screens/text-screen';
import ToastScreen from '~/screens/main-screens/toast-screen';
import ScreenFive from '~/screens/test-screens/screen-five';
import ScreenFour from '~/screens/test-screens/screen-four';
import ScreenOne from '~/screens/test-screens/screen-one';
import ScreenThree from '~/screens/test-screens/screen-three';
import ScreenTwo from '~/screens/test-screens/screen-two';

import { SetScreenName, navigate, navigationRef } from '~/hooks/useLocation';

enableScreens();
const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    useEffect(() => {
        // set the screen name in the reducer on the first time of the page load
        console.log('set the screen name');
        SetScreenName();
    }, []);
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={SCREEN_ONE}
                screenOptions={{
                    headerShown: false,
                }}
                screenListeners={{
                    state: (e) => {
                        SetScreenName('screen_listener', e.data);
                        // navigate(e.data.state.routes[e.data.state.index].name);
                    },
                }}
            >
                {/* OnBoarding Screen */}
                {/* Auth Screens */}

                {/* Main Screens */}
                <Stack.Screen
                    name={COMPONENT_SCREEN}
                    component={ComponentScreen}
                />
                <Stack.Screen name={TEXT_SCREEN} component={TextScreen} />
                <Stack.Screen name={INPUT_SCREEN} component={InputScreen} />
                <Stack.Screen
                    name={CHECKBOX_SCREEN}
                    component={CheckboxScreen}
                />
                <Stack.Screen name={TOAST_SCREEN} component={ToastScreen} />
                <Stack.Screen name={RADIO_SCREEN} component={RadioScreen} />
                <Stack.Screen name={SCREEN_ONE} component={ScreenOne} />
                <Stack.Screen name={SCREEN_TWO} component={ScreenTwo} />
                <Stack.Screen name={SCREEN_THREE} component={ScreenThree} />
                <Stack.Screen name={SCREEN_FOUR} component={ScreenFour} />
                <Stack.Screen name={SCREEN_FIVE} component={ScreenFive} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
