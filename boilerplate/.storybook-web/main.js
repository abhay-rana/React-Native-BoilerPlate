//   stories: [
//     "../components/**/*.stories.mdx",
//     "../components/**/*.stories.@(js|jsx|ts|tsx)",
//   ],

// ./storybook-web/main.js
module.exports = {
    stories: ['../.storybook/stories/**/*.stories.?(ts|tsx|js|jsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-react-native-web',
    ],
    core: {
        builder: 'webpack5',
    },
    framework: '@storybook/react',
};
