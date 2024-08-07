import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

import tw from '~/styles/tailwind';

import Navigation from '~/navigation/navigation';

import Container from '~/components/container/container';
import ErrorBoundary from '~/components/container/error-boundary';

import { SentryLogger } from '~/scripts/track-error';

import { APP_MODE, SENTRY_ANDROID_DSN } from '~/env';

SentryLogger.init({
    dsn: SENTRY_ANDROID_DSN,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    environment: APP_MODE,
    normalizeDepth: 10, // Or however deep you want your state context to be.(for redux)
});

const App = () => {
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

export default SentryLogger.wrap(App);
