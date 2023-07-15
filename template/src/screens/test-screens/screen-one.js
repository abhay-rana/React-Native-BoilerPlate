import { View } from 'react-native';
import { connect } from 'react-redux';
import { SCREEN_TWO } from '~/constants/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';
import TextInput from '~/components/library/text-input';

import {
    AuthSetSigninDetails,
    AuthSetSignupDetails,
} from '~/actions/auth-actions';

import { useLocation } from '~/hooks/useLocation';

const ScreenOne = (props) => {
    const [location, setLocation] = useLocation();
    console.log('location is:', location);
    return (
        <View style={tw`flex-1`}>
            <Text style={tw`font-401`}>ScreenOne</Text>
            <Text>SignUp Details Form</Text>
            <TextInput
                value={props.signup_details.name}
                label="name"
                onChangeText={(text) =>
                    props.Auth_Set_SignupDetails('name', text)
                }
                bordered
            />
            <TextInput
                value={props.signin_details.name}
                label="name"
                onChangeText={(text) =>
                    props.Auth_Set_SigninDetails('name', text)
                }
                bordered
            />
            <TextInput
                value={props.signin_details.city}
                label="city"
                onChangeText={(text) =>
                    props.Auth_Set_SigninDetails('city', text)
                }
                bordered
            />
            <Button
                onPress={() =>
                    setLocation(SCREEN_TWO, {
                        name: 'abhay',
                    })
                }
            >
                ScreenTwo
            </Button>
        </View>
    );
};

const mapStateToProps = (state) => ({
    signup_details: state.auth_store.user_signup_details,
    signin_details: state.auth_store.user_signin_details,
});
const mapDispatchToProps = (dispatch) => ({
    Auth_Set_SignupDetails: (key, value) =>
        dispatch(AuthSetSignupDetails(key, value)),
    Auth_Set_SigninDetails: (key, value) =>
        dispatch(AuthSetSigninDetails(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenOne);
