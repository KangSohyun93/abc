import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        loading: false,
        user: null,
        error: null,
    },
    register: {
        loading: false,
        user: null,
        error: null,
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerStart: (state) => {
            state.register.loading = true;
        },
        registerSuccess: (state, actions) => {
            state.register.loading = false;
            state.register.user = actions.payload;
        },
        registerFail: (state, actions) => {
            state.register.loading = false;
            state.register.error = actions.payload;
        },
        loginStart: (state) => {
            state.login.loading = true;
        },
        loginSuccess: (state, actions) => {
            state.login.loading = false;
            state.login.user = actions.payload;
        },
        loginFail: (state, actions) => {
            state.login.loading = false;
            state.login.error = actions.payload;
        },
    }
})

export const {loginStart, loginSuccess, loginFail, registerStart, registerSuccess, registerFail} = userSlice.actions;
export const userReducer = userSlice.reducer;