import { memo } from 'react';
import { View } from 'react-native';
import { SCREEN_FOUR } from '~/constants/navigation-constant';



import tw from '~/styles/tailwind';



import Button from '~/components/library/button';
import Text from '~/components/library/text';



import { useLocation } from '~/hooks/useLocation';


const ScreenThree = () => {
    const { setLocation } = useLocation();
    console.log('rendered screen three***');
    return (
        <View style={tw``}>
            <Text>ScreenThree</Text>
            <Button onPress={() => setLocation(SCREEN_FOUR)}>ScreenfOUR</Button>
        </View>
    );
};

export default memo(ScreenThree);