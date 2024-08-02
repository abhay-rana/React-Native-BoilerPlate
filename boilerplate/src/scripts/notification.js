import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

/**
 * @description Get the device token if permission is granted
 */

// Request Permission
const _requestPermission = async () => {
    try {
        const permissions = await messaging().requestPermission();
        console.log('permission', permissions);
        if (!!permissions) await GetFCMToken();
        return permissions;
    } catch (error) {
        Alert.alert('permission rejected');
        console.error('Permissions', error);
    }
};

export const GetFCMToken = async () => {
    try {
        const fcm_token = await messaging().getToken();

        if (fcm_token) {
            console.log('** FCM Token **', fcm_token);
            return fcm_token;
        }
    } catch (err) {
        console.error('Get FCM Token:', err);
    }
};

export const InitializeNotification = async () => {
    const permissions = await _requestPermission();
    if (!!permissions) {
        // if the app is the background state -> clicked/tapped
        messaging().onNotificationOpenedApp((remoteMessage) => {
            console.log(
                'Notification caused app to open from background state:',
                remoteMessage.notification
            );
        });

        // Quiet and Background State -> Check whether an initial notification is available ->clicked/tapped
        messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
                if (remoteMessage) {
                    console.log(
                        'Notification caused app to open from quit state:',
                        remoteMessage.notification
                    );
                }
            })
            .catch((error) => console.log('failed', error));

        // Foreground State if the push notification is trigger when the app is open
        messaging().onMessage(async (remoteMessage) => {
            console.log('foreground', remoteMessage);
            await notifee.createChannel({
                id: 'important-reminders',
                name: 'Important Reminders',
                vibration: true,
                importance: AndroidImportance.HIGH,
            });
            const notification = {
                title: '',
                body: '',
                android: {
                    channelId: 'important-reminders',
                },
            };
            notification.body = remoteMessage.notification.body;
            notification.title = remoteMessage.notification.title;
            // if image is present
            if (remoteMessage.notification?.android?.imageUrl) {
                notification.android.largeIcon =
                    remoteMessage.notification.android?.imageUrl;
            }

            await notifee.displayNotification(notification);
        });

        // Register background handler
        // this create the service and register the app
        messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log('Message handled in the background!', remoteMessage);
        });
    }
};
