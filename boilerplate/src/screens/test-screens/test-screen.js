import React, { memo } from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

const TestScreen = () => {
    const [state, setState] = useState();
    function newError() {}
    return (
        <View style={tw``}>
            <Button onPress={newError}>This is Error</Button>
            <Text>TestScreen</Text>
        </View>
    );
};

export default memo(TestScreen);
