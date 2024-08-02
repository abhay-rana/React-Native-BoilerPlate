import React, { Component } from 'react';
import { View } from 'react-native';

// import commonAssets from '~/theme/common-assets';
// import ProgressiveImage from '~/components/common/progressive-image';
// import Text from '~/components/common/text';
// import Button from '~/components/form-layouts/button';
// import TrackError from '~/scripts/track-error';
import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

import TrackError from '~/scripts/track-error';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
        TrackError.noAlert(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <View
                    style={tw`flex-1 flex flex-row items-center justify-center p-5 bg-gray-lightest`}
                >
                    <View style={tw`p-5`}>
                        {/* <ProgressiveImage
                            local_src={commonAssets.error}
                            style={tw`w-40 h-40 self-center`}
                        /> */}
                        <Text w500 style={tw`text-md text-center text-black`}>
                            Oops...
                        </Text>

                        <Text style={tw`text-gray-medium text-center`}>
                            Sorry, Something went wrong. Try again
                        </Text>

                        <Button
                            onPress={() => this.setState({ hasError: false })}
                            primary
                            ripple
                            rounded
                            large
                            style={tw`mt-5
						`}
                        >
                            Go To Home
                        </Button>
                    </View>
                </View>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
