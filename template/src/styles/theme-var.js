import { Dimensions, Platform } from 'react-native';
// black is 900
// extrabold is 800
// bold is 700
// semibold is 600
// medium is 500
// regular is 400
export const PRIMARY_FONT_BLACK = 'Poppins-Black';
export const PRIMARY_FONT_BOLD = 'Poppins-Medium';
export const PRIMARY_FONT_REGULAR = 'Poppins-Regular';
export const SECONDARY_FONT_BOLD = 'Kalam-Bold';
export const SECONDARY_FONT_MEDIUM = 'Kalam-Regular';
export const SECONDARY_FONT_REGULAR = 'Kalam-Light';

const themeVar = {
    primary: { default: '#007ECE', dark: '#0b7670', light: '#e1fdf8' },
    secondary: { default: '#d9dd28' },
    warning: { default: '#fb8903', light: '#fff0ca' },
    danger: { default: '#ff0000', light: '#ffebeb' },
    success: { default: '#5cb85c', light: '#ecffef' },
    gray: {
        dark: '#464646',
        default: '#3c4858',
        medium: '#818181',
        light: '#b7b7b7',
        lightest: '#F4F4F4',
    },

    platform: Platform.OS,
    ios: Platform.OS === 'ios',
    android: Platform.OS === 'android',
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height,
    pointerEvents: Platform.OS === 'android' ? { pointerEvents: 'none' } : null,
};

export default themeVar;
