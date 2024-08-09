import axios from 'axios';
import { Logout } from '~/redux/actions/auth-actions';
import store from '~/redux/store';

import Alertify from '~/scripts/toast';

import { ProjectUrl } from '~/env';

// Create an axios instance with the base URL
const api = axios.create({
    baseURL: ProjectUrl,
});

// Request interceptor to add the authorization token
api.interceptors.request.use(
    async (config) => {
        const token = store.getState().auth_store.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            store.dispatch(Logout());
            Alertify.error('Your session is expired');
        }
        return Promise.reject(error?.response?.data);
    }
);

// Centralized error handling function
export function handleApiError(error, rejectWithValue) {
    console.error(error);
    Alertify.error(error?.message?.[0] || 'An error occurred');
    return rejectWithValue(error);
}

// Helper function to handle API requests
const handleApiRequest = async (
    method,
    path,
    data = {},
    headers = {},
    cancelToken
) => {
    try {
        const response = await api({
            method,
            url: path,
            data,
            headers: {
                Accept: 'application/json',
                'ngrok-skip-browser-warning': '69420',
                ...headers,
            },
            cancelToken,
        });
        return response.data;
    } catch (error) {
        console.error(`API ${method.toUpperCase()} error:`, error);
        throw error;
    }
};

// Exported API functions
export const postApi = (path, data, headers, cancelToken) =>
    handleApiRequest('post', path, data, headers, cancelToken);

export const getApi = (path, headers, cancelToken) =>
    handleApiRequest('get', path, {}, headers, cancelToken);

export const patchApi = (path, data, headers) =>
    handleApiRequest('patch', path, data, headers);
