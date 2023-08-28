import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './types';

import AuthService from '../services/auth.service';
import { AxiosError } from 'axios';

export const register =
    (email: string, password: string, name: string, role: string) =>
    async (dispatch: any) => {
        return await AuthService.register(email, password, name, role)
            .then((data: any) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: data.message,
                });

                return Promise.resolve();
            })
            .catch((error: AxiosError) => {
                const errorMessage: any =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: errorMessage,
                });

                return Promise.reject(errorMessage['message']);
            });
    };

export const login = (email: string, password: string) => (dispatch: any) => {
    return AuthService.login(email, password)
        .then((data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        })
        .catch((error: AxiosError) => {
            const errorMessage: any =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: errorMessage,
            });
            return Promise.reject(errorMessage['message']);
        });
};

export const logout = () => (dispatch: any) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};
