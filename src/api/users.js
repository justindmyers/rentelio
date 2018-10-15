import Strapi from 'strapi-sdk-javascript';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
    getCurrentUser() {
        return strapi.request('get', 'user/me');
    },
    getUsers() {
        return strapi.request('get', 'user');
    },
    login(username, password) {
        return strapi.login(username, password);
    },
    logout() {
        return strapi.clearToken();
    },
    async register(username, password, profile) {
        const register = await strapi.register(username, username, password);

        if(register) {
            profile.user = register.user.id;

            return await strapi.request('post', '/profile', {
                data: profile
            });
        }

        return register;
    },
    forgotPassword(email) {
        return strapi.forgotPassword(email, `${window.location.protocol}//${window.location.host}/reset-password` );
    },
    resetPassword(code, password) {
        return strapi.resetPassword(code, password, password);
    }
};