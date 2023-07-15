import { View } from 'react-native';
import { connect } from 'react-redux';
import {
    SCREEN_FIVE,
    SCREEN_ONE,
    SCREEN_THREE,
    SCREEN_TWO,
    TAB_FOOTER_SCREENS,
} from '~/constants/navigation-constant';

import tw from '~/styles/tailwind';

import Text from '~/components/library/text';

import { useLocation } from '~/hooks/useLocation';

const TabFooter = (props) => {
    const [_, setLocation] = useLocation();
    console.log('****current_screen****', props.current_screen);
    return (
        <>
            {props.show_tab_footer ? (
                <>
                    <View style={tw``}>
                        <Text onPress={() => setLocation(SCREEN_FIVE)}>
                            Home
                        </Text>
                        <Text onPress={() => setLocation(SCREEN_ONE)}>
                            Settings
                        </Text>
                        <Text onPress={() => setLocation(SCREEN_THREE)}>
                            Profile
                        </Text>
                        <Text onPress={() => setLocation(SCREEN_TWO)}>
                            About
                        </Text>
                    </View>
                </>
            ) : null}
        </>
    );
};

const _showTabFooter = (screen_name) => {
    console.log('Tab', screen_name);
    if (TAB_FOOTER_SCREENS.includes(screen_name)) {
        return true;
    }
};

const mapStateToProps = (state) => ({
    show_tab_footer: _showTabFooter(state.container_store.current_screen),
    current_screen: state.container_store.current_screen,
});

export default connect(mapStateToProps, null)(TabFooter);
