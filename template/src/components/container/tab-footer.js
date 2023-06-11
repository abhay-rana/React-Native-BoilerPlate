import React, { memo } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import tw from '~/styles/tailwind';

import Text from '~/components/library/text';

const TabFooter = (props) => {
    return (
        <>
            {props.show_tab_footer ? (
                <>
                    <View style={tw``}>
                        <Text>TabFooter</Text>
                    </View>
                </>
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => ({
    show_tab_footer: state.container_store.show_tab_footer,
});

export default connect(mapStateToProps, null)(TabFooter);
