import  { memo, useState } from 'react';
import {
    
    Image,
    KeyboardAvoidingView,
    Platform,
    
    ScrollView,
    StyleSheet,
    TextInput,
    
    TouchableOpacity,
    
    View,
} from 'react-native';

import tw from '~/styles/tailwind';

import Text from '~/components/library/text';





// import { ACTIVITY_LEVEL_SCREEN } from '~/constants/navigation-constant';

import { useLocation,navigationRef } from '~/hooks/useLocation';



// import TextInput from '~/components/library/text-input';

const KeyboardAvoidingScreen = () => {
    const [input, setInput] = useState();
    const [location, setLocation] = useLocation();
        const handleInputChange = () => {};
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
            style={tw`flex-1 items-center justify-center`}
            keyboardVerticalOffset={48}
        >
            <ScrollView
                style={tw`flex-1`}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="on-drag"
            >
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Your Measurement</Text>
                    <Text style={styles.subHeading}>
                        You Can Always Change This Later{' '}
                    </Text>
                </View>
                <Text style={styles.divider}></Text>
                <View style={styles.subContainer}>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Chest </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View>
                            <Text style={styles.label}> Shoulder </Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Arm (L) </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View>
                            <Text style={styles.label}> Arm (R) </Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Bicep (L) </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View>
                            <Text style={styles.label}> Bicep (R) </Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Forearm (L) </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View>
                            <Text style={styles.label}> Forearm (R) </Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Weist </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View>
                            <Text style={styles.label}> Hip </Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Thigh (L) </Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View>
                            <Text style={styles.label}> Thigh (R) </Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View>
                            <Text style={styles.label}> Calf (L) </Text>
                            <TextInput style={styles.input} autoCorrect={false} />
                        </View>
                        <View>
                            <Text style={styles.label}> Calf (R) </Text>
                            <TextInput style={styles.input} autoCorrect={false}/>
                        </View>
                    </View>

                    <View style={styles.imageButtonContainer}>
                        <TouchableOpacity
                            onPress={() => navigationRef.goBack()}
                        >
                            {/* <Image
                                source={require('../../assets/images/back-button.png')}
                                style={styles.backImage}
                            /> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            // onPress={() => setLocation(ACTIVITY_LEVEL_SCREEN)}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                            {/* <Image
                                source={require('../../assets/images/start-now-icon.png')}
                                style={styles.buttonImage}
                            /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default memo(KeyboardAvoidingScreen);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: '100%',
    },
    headingContainer: {
        paddingTop: 30,
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 30,
        color: '#FFFFFF',
    },
    subHeading: {
        fontFamily: 'Helvetica-',
        fontSize: 13,
        color: '#CCCCCC',
        marginBottom: 8,
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: '#D1FF70',
    },
    subContainer: {
        paddingHorizontal: 20,
    },
    inputContainer: {
        // flex: 1,
        flexDirection: 'row',
    },
    label: {
        color: '#CCCCCC',
        fontSize: 14,
        fontFamily: 'Helvetica-',
    },
    input: {
        borderWidth: 1,
        width: 170,
        height: 42,
        borderColor: '#CCCCCC',
        marginTop: 6,
        borderRadius: 30,
        paddingHorizontal: 20,
        color: '#FFFFFF',
        fontFamily: 'Helvetica-',
        fontSize: 16,
        marginRight: 14,
        marginBottom: 20,
        backgroundColor: '#1E1E1E',
    },
    button: {
        backgroundColor: '#D1FF70',
        borderRadius: 48,
        width: 125,
        height: 50,
        paddingHorizontal: 30,
        paddingVertical: 13,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#000000',
        fontFamily: 'HelveticaNeue-Bold',
        lineHeight: 21,
    },
    buttonImage: {
        width: 9,
        height: 15,
        marginLeft: 15,
    },
    imageButtonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backImage: {
        height: 54,
        width: 54,
    },
});
