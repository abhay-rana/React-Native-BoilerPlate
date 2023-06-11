module.exports = function (api) {
    console.log('babel env - ' + api.env());

    let plugins = [
        [
            'module-resolver',
            {
                extensions: ['.ios.js', '.android.js', '.js', '.json'],
                stripExtensions: ['.js', '.jsx', '.es', '.es6', '.mjs'],
                alias: {
                    '~': './src',
                },
            },
        ]
    ];

    if (!api.env('development')) {
        plugins.push('transform-remove-console');
    }

    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: plugins,
    };
};
