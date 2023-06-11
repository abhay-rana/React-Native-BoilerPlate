import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from '~/navigation/navigation';

import tw from '~/styles/tailwind';

import Container from '~/components/container/container';

const App = () => {
    return (
        <View style={tw`flex-1`}>
            <Container>
                <Navigation />
            </Container>
        </View>
    );
};

export default App;
