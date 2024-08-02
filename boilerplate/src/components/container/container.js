import { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import tw from '~/styles/tailwind';

import TabFooter from '~/components/container/tab-footer';

const Container = ({ children }) => {
    useEffect(() => {
        //! hide the splashScreen here
    }, []);

    return (
        <>
            <View style={tw`flex-1`}>
                {children}
                <TabFooter />
            </View>
        </>
    );
};

export default connect(null, null)(Container);
