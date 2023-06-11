
# react-native-template

A starter kit for initializing a new React-Native project with some commonly used preconfigured libraries and the folder structure.

<p align="center">
  <img height="400" alt="react-native-template installation" src="https://raw.githubusercontent.com/ajaykumar97/images-container/main/react-native-template/react-native-template-installation.gif">
</p>

## Key features:
- Pre-configured folder structure
- Basic Authentication screens(Login, Signup, Forgot Password) and flow
- Reusable common components, utility functions and constants
- [Logger](https://github.com/ajaykumar97/react-native-simple-logger) to log data more clearly using coloured logs in Chrome Debugger
- Navigation using [react-navigation](https://reactnavigation.org/) (v6)
- State management using [redux](https://redux.js.org/)
- Redux middleware [redux-saga](https://redux-saga.js.org/)
- Git hooks using [husky](https://typicode.github.io/husky/#/)
- Staging and Production environment configurations using [react-native-config](https://github.com/luggit/react-native-config)
- TDD(Test-Driven Development) using [jest](https://jestjs.io/)
- (Unsecured) local data storage using [AsyncStorage](https://github.com/react-native-async-storage/async-storage#readme)
- Splash screen using [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
- API requests using [axios](https://axios-http.com/)
- Localization using [react-native-localization](https://github.com/stefalda/ReactNativeLocalization)
- Responsive UI using flexbox and [react-native-size-matters](https://github.com/nirsky/react-native-size-matters)

## Prerequisite
1. Make sure that you have followed the environment setup instructions properly from the official [React Native docs](https://reactnative.dev/docs/environment-setup).

2. The installation command will fail if you have the global legacy `react-native-cli` installed in your machine. Make sure you uninstall it first:

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Quick start
Generate a new React Native(**v0.71.7**) app using the **@abhay/react-native-template**:

eg:- npx react-native init ReactNativeTestings --template https://github.com/abhay-rana/React-Native-BoilerPlate#[branch-name]

npx react-native init ReactNativeTestings --template https://github.com/abhay-rana/React-Native-BoilerPlate#components

npx react-native init ReactNativeTestings --template https://github.com/abhay-rana/React-Native-BoilerPlate
