import * as Sentry from '@sentry/react-native';

import Alertify from '~/scripts/toast';

export const SentryLogger = Sentry;

const TrackError = {
    onlyAlert: (data) => {
        Alertify.error(data);
    },
    withAlert: (message, data) => {
        let error_data = data ?? message;

        Sentry.captureException(error_data);
        Alertify.error(message);
        console.log(error_data);
    },
    noAlert: (data) => {
        Sentry.captureException(data);
        console.log(data);
    },
};

export default TrackError;
