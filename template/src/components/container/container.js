import { View } from 'react-native';
import { connect } from 'react-redux';

import tw from '~/styles/tailwind';

import TabFooter from '~/components/container/tab-footer';

const Container = ({ children, ...props }) => {
    return (
        <>
            {props.is_rehydrated ? (
                <View style={tw`flex-1`}>
                    {children}
                    <TabFooter />
                </View>
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    is_rehydrated: state.rehydration_store.is_rehydrated,
});

export default connect(mapStateToProps, null)(Container);
