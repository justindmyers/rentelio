import Strapi from 'strapi-sdk-javascript';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
    getCurrentUser() {
        return strapi.request('get', 'user/me');
    },
    login(username, password) {
        return strapi.login(username, password);
    },
    register(username, password, firstName) {
        return strapi.register(username, username, password, firstName);
    },
    forgotPassword(email) {
        return strapi.forgotPassword(email, `${window.location.protocol}//${window.location.host}/reset-password` );
    },
    resetPassword(code, password) {
        return strapi.resetPassword(code, password, password);
    }
};