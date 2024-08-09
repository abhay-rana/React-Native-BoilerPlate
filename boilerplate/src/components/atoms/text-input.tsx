import clsx from 'clsx';
import { forwardRef, memo, useCallback, useState } from 'react';
import {
    TextInput as RNTextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from 'react-native';

import tw from '~/styles/tailwind';
import themeVar from '~/styles/theme-var';

import EyeCloseSvg from '~/assets/svg/eye-close.svg';
import EyeOpenSvg from '~/assets/svg/eye-open.svg';

import Text from '~/components/library/text';

interface CustomTextInputProps extends TextInputProps {
    type?: 'text' | 'password';
    stacked?: boolean;
    success?: string;
    note?: string;
    error?: string;
    small?: boolean;
    large?: boolean;
    label?: string;
    bordered?: boolean;
    disabled?: boolean;
}

const TextInput = forwardRef<RNTextInput, CustomTextInputProps>(
    (
        {
            style,
            type = 'text',
            stacked,
            success,
            note,
            error,
            small,
            large,
            label,
            onFocus,
            disabled,
            onBlur,
            bordered,
            value,
            multiline,
            ...props
        },
        ref
    ) => {
        const [focusStyle, setFocusStyle] = useState({
            labelColor: themeVar.gray.light,
            inputBorderColor: themeVar.gray.light,
        });

        const [showPassword, setShowPassword] = useState(false);

        const handleFocus = (e) => {
            if (!!onFocus) onFocus(e);
            setFocusStyle({
                labelColor: themeVar.primary.default,
                inputBorderColor: themeVar.primary.default,
            });
        };
        const handleBlur = (e) => {
            if (!!onBlur) onBlur(e);
            setFocusStyle({
                labelColor: themeVar.gray.light,
                inputBorderColor: themeVar.gray.light,
            });
        };

        const togglePasswordVisibility = useCallback(() => {
            setShowPassword((prev) => !prev);
        }, []);

        const inputClassNames = clsx('py-0', {
            'border px-2': bordered,
            'border-b px-0': stacked,
            'border-primary': success,
            'border-danger text-danger': error,
            'border-gray-medium text-gray-dark': !success && !error,
            'h-7 text-base leading-4': small && !multiline,
            'h-10 text-lg leading-5': large && !multiline,
            'h-8 text-md leading-5': !small && !large && !multiline,
            'py-1': multiline,
            'bg-gray-200': disabled,
            'border-gray-400': disabled && bordered,
        });

        const inputStyle = {
            ...tw`${inputClassNames}`,
            ...style,
            fontFamily: props.w200
                ? 'ProximaNovaLight'
                : props.w400
                ? 'ProximaNovaMedium'
                : props.w300
                ? 'ProximaNovaRegular'
                : props.w600
                ? 'ProximaNovaBold'
                : props.w700
                ? 'ProximaNovaExtraBold'
                : 'ProximaNovaSemiBold',
            borderColor: bordered
                ? focusStyle.inputBorderColor
                : stacked
                ? focusStyle.inputBorderColor
                : undefined,
        };

        return (
            <View style={tw`relative`}>
                {label && (
                    <Text style={disabled && tw`text-black text-10 `}>
                        {label}
                    </Text>
                )}
                <View style={tw`relative mt-1`}>
                    <RNTextInput
                        ref={ref}
                        multiline={multiline}
                        editable={!disabled}
                        value={value?.toString()}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        textAlignVertical={multiline ? 'top' : 'auto'}
                        secureTextEntry={type === 'password' && !showPassword}
                        style={inputStyle}
                        placeholderTextColor="#b7b7b7"
                        {...props}
                    />
                    {type === 'password' && (
                        <TouchableOpacity
                            style={tw`absolute top-1 right-4 ${
                                disabled ? 'text-gray-400' : 'text-gray-600'
                            }`}
                            onPress={togglePasswordVisibility}
                            disabled={disabled}
                        >
                            {showPassword ? (
                                <EyeOpenSvg width={20} height={20} />
                            ) : (
                                <EyeCloseSvg width={20} height={20} />
                            )}
                        </TouchableOpacity>
                    )}
                </View>
                {(error || note || success) && (
                    <View style={tw`h-6`}>
                        {error ? (
                            <Text style={tw`text-xs text-danger`}>{error}</Text>
                        ) : note ? (
                            <Text style={tw`text-xs text-gray-medium`}>
                                {note}
                            </Text>
                        ) : success ? (
                            <Text style={tw`text-xs text-success`}>
                                {success}
                            </Text>
                        ) : null}
                    </View>
                )}
            </View>
        );
    }
);

TextInput.displayName = 'TextInput';
export default memo(TextInput);
