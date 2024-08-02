import { AppRegistry, LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Text from '~/components/library/text';

import { CommonResetLocalState } from '~/actions/container-actions';

import store, { persistor } from '~/reducers/store';

import { config } from '~/scripts/toast';

import App from './app';
import { name as appName } from './app.json';

// import {InitializeNotification} from './src/scripts/notification';

LogBox.ignoreAllLogs(); //Ignore all log notifications

// initialize all the notification state handlers in the starting of app
// InitializeNotification();

const Root = () => {
    function removePersistLocalState() {
        store.dispatch(CommonResetLocalState());
    }

    return (
        <>
            <Provider store={store}>
                <PersistGate
                    loading={<Text>Loading...</Text>}
                    persistor={persistor}
                    onBeforeLift={removePersistLocalState}
                >
                    <App />
                    <Toast config={config} />
                </PersistGate>
            </Provider>
        </>
    );
};

AppRegistry.registerComponent(appName, () => Root);
