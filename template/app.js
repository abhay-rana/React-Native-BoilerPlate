import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import tw from '~/styles/tailwind';

import Navigation from '~/navigation/navigation';

import Container from '~/components/container/container';
import ErrorBoundary from '~/components/container/error-boundary';

import { CommonResetLocalState } from '~/actions/container-actions';

const App = (props) => {
    useEffect(() => {
        props.Common_Reset_Local_State();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={tw`flex-1 relative`}>
                    <ErrorBoundary>
                        <Container>
                            <Navigation />
                        </Container>
                    </ErrorBoundary>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    Common_Reset_Local_State: () => dispatch(CommonResetLocalState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
