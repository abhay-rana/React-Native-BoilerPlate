import * as Sentry from '@sentry/react-native';
import { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import tw from '~/styles/tailwind';

import Navigation from '~/navigation/navigation';

import Container from '~/components/container/container';
import ErrorBoundary from '~/components/container/error-boundary';

import { CommonResetLocalState } from '~/actions/container-actions';

Sentry.init({
    dsn: 'https://bd036f012e22d8fa2b7d7d3de94f74e0@o4505084829106176.ingest.sentry.io/4505854832214016',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
});

const App = (props) => {
    useEffect(() => {
        props.Common_Reset_Local_State();
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <TopStatusFiller />
                <View style={tw`flex-1 relative`}>
                    <ErrorBoundary>
                        <Container>
                            <Navigation />
                        </Container>
                    </ErrorBoundary>
                </View>
                <BottomStatusFiller />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const TopStatusFiller = () => {
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.top;

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View
                style={[
                    tw`bg-black absolute top-0 left-0 right-0`,
                    { height: statusBarHeight },
                ]}
            />
        </>
    );
};

const BottomStatusFiller = () => {
    const insets = useSafeAreaInsets();
    const statusBarHeight = insets.bottom;

    return (
        <View
            style={[
                tw`bg-white absolute bottom-0 left-0 right-0 h-10`,
                { height: statusBarHeight },
            ]}
        />
    );
};

const mapDispatchToProps = (dispatch) => ({
    Common_Reset_Local_State: () => dispatch(CommonResetLocalState()),
});

export default Sentry.wrap(connect(null, mapDispatchToProps)(App));
