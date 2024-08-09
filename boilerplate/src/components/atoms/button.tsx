import React from 'react';
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

import tw from '~/styles/tailwind';

import { Asset } from '~/assets';

interface ButtonProps {
    onPress?: () => void;
    onLongPress?: () => void;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
    disabled?: boolean;
    activeOpacity?: number;
    loading?: boolean;
    nextImage?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    onPress,
    onLongPress,
    iconLeft,
    iconRight,
    style,
    textStyle,
    disabled,
    activeOpacity = 0.7,
    loading = false,
    children,
    nextImage = false,
}) => {
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                onLongPress={onLongPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
                style={[
                    disabled ? styles.disabledButton : styles.button,
                    style,
                ]}
            >
                {iconLeft}
                <View
                    style={[
                        tw`w-full justify-center gap-2 items-center`,
                        styles.content,
                    ]}
                >
                    <Text
                        style={[
                            tw` text-center `,
                            styles.buttonText,
                            textStyle,
                        ]}
                    >
                        {children}
                    </Text>
                    {loading && (
                        <ActivityIndicator
                            color="white"
                            style={styles.loader}
                        />
                    )}
                    {nextImage && (
                        <Image
                            resizeMode="contain"
                            source={Asset.ArrowImage}
                            style={tw`w-5 h-5 `}
                        />
                    )}
                </View>
                {iconRight}
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // Add any additional styles or override default styles here
    },
    disabledButton: {
        backgroundColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
    },
    loader: {
        marginLeft: 10, // Adjust the spacing between the loader and the text
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
        // Add any additional styles or override default styles here
    },
});

export default Button;
