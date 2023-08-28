import axios from 'axios';

export default class AuthService {
    constructor() {}
    static API_URL = 'http://localhost:8080/auth/';

    static async login(email: string, password: string) {
        try {
            return await axios
                .post(this.API_URL + 'login', { email, password })
                .then((response) => {
                    if (response.data.accessToken) {
                        localStorage.setItem(
                            'user',
                            JSON.stringify(response.data)
                        );
                    }

                    return response.data;
                });
        } catch (error) {
            return { error: error };
        }
    }

    static async register(
        email: string,
        password: string,
        name: string,
        role: string
    ) {
        try {
            return await axios
                .post(this.API_URL + 'register', {
                    email,
                    password,
                    name,
                    role,
                })
                .then((response) => {
                    return response.data;
                });
        } catch (error) {
            return error;
        }
    }

    static async logout() {
        localStorage.removeItem('user');
    }
}
