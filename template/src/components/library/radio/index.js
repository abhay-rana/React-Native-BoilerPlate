import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';

import tw from '~/styles/tailwind';
import themeVar from '~/styles/theme-var';

import Text from '~/components/library/text';

export const Radio = ({
    name,
    current_value,
    onPress,
    label,
    value,
    radioColor,
}) => {
    const color = radioColor ?? themeVar.primary.default;
    return (
        <View
            style={tw`flex flex-row gap-2 border border-black relative items-center`}
        >
            <TouchableOpacity onPress={() => onPress(value)}>
                <Text style={{}}>{label}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(value)}>
                <View
                    style={[
                        tw`h-4 w-4 rounded-full border`,
                        {
                            backgroundColor:
                                current_value === value ? color : 'transparent',
                        },
                    ]}
                ></View>
            </TouchableOpacity>
        </View>
    );
};

const RadioGroup = ({
    children,
    onPress,
    value,
    style,
    name,
    label,
    radioColor,
}) => {
    //pass the "name" "value" "onChange" to the children component which is Radio Component
    return (
        <>
            <View style={`flex flex-col ${style}`}>
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        name: name,
                        current_value: value,
                        onPress: onPress,
                        radioColor: radioColor,
                    })
                )}
            </View>
        </>
    );
};

RadioGroup.displayname = 'RadioGroup';

export default memo(RadioGroup);
