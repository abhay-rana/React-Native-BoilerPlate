import { View } from 'react-native';
import { connect } from 'react-redux';
import { LOGOUT, USER_SET_LOGIN } from '~/constants/action-types';
import { SCREEN_THREE } from '~/constants/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

import { useLocation } from '~/hooks/useLocation';

const ScreenFour = (props) => {
    const { setLocation } = useLocation();
    console.log('rendered screen four');
    return (
        <View style={tw``}>
            <Text>ScreenFour</Text>
            <Button onPress={() => props.User_Set_Login()}>Login</Button>
            <Button onPress={() => props.User_Set_Logout()}>Logout</Button>
            <Button onPress={() => setLocation(SCREEN_THREE)}>
                ScreenThree
            </Button>
        </View>
    );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    User_Set_Login: () => dispatch({ type: USER_SET_LOGIN }),
    User_Set_Logout: () => dispatch({ type: LOGOUT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFour);
