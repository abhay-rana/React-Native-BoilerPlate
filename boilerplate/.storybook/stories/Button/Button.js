import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import tw from '~/styles/tailwind';

export const MyButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={tw`bg-red-400 p-2 m-2`}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'purple',
        borderRadius: 8,
    },
    text: { color: 'white' },
});
