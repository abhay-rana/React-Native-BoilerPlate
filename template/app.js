import React, { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Navigation from '~/navigation/navigation';

import tw from '~/styles/tailwind';

import Container from '~/components/container/container';

import { CommonResetLocalState } from '~/actions/container-actions';

const App = (props) => {
    useEffect(() => {
        props.Common_Reset_Local_State();
    }, []);

    return (
        <View style={tw`flex-1`}>
            <Container>
                <Navigation />
            </Container>
        </View>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    Common_Reset_Local_State: () => dispatch(CommonResetLocalState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
