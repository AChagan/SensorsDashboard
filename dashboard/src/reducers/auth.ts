import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../actions/types';

import { PayloadAction } from '@reduxjs/toolkit';

const user = localStorage.getItem('user');

let initialState = {};

if (!user) {
    initialState = { isLoggedIn: false, user: null };
} else {
    const parsedUSer = JSON.parse(user);
    initialState = { isLoggedIn: true, parsedUSer };
}

export default function (state = initialState, action: PayloadAction<any>) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}
