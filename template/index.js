import { AppRegistry, LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';

import store from '~/reducers/store';

import { config } from '~/scripts/toast';

import App from './app';
import { name as appName } from './app.json';

// import {InitializeNotification} from './src/scripts/notification';

LogBox.ignoreAllLogs(); //Ignore all log notifications

// initialize all the notification state handlers in the starting of app
// InitializeNotification();

const Root = () => {
    return (
        <>
            <Provider store={store}>
                <App />
                <Toast config={config} />
            </Provider>
        </>
    );
};

AppRegistry.registerComponent(appName, () => Root);
