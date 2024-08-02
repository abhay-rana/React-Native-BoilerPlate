import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    is_login: false,
    token: '',
    userId: '',
    name: '',
    role: '',
    image: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action) => {},
    },
    extraReducers: (builder) => {},
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
