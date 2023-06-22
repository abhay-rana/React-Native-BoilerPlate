import React, { memo } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { TAB_FOOTER_SCREENS } from '~/constants/navigation-constant';

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

const _showTabFooter = (screen_name) => {
    console.log('Tab', screen_name);
    if (TAB_FOOTER_SCREENS.includes(screen_name)) {
        return true;
    }
};

const mapStateToProps = (state) => ({
    show_tab_footer: _showTabFooter(state.container_store.current_screen),
});

export default connect(mapStateToProps, null)(TabFooter);
