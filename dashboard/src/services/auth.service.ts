import axios from 'axios';

export default class AuthService {
    constructor() {}
    static API_URL = 'http://localhost:8080/auth/';

    static async login(email: string, password: string) {
        return axios
            .post(this.API_URL + 'login', { email, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    static async register(email: string, password: string) {
        return axios.post(this.API_URL + 'register', {
            email,
            password,
        });
    }

    static async logout() {
        localStorage.removeItem('user');
    }
}
