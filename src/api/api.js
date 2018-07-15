import Strapi from 'strapi-sdk-javascript/build/main';
    
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
    getMessages() {
        return strapi.request('get', '/message');
    },
    getPayments() {
        return strapi.request('get', '/payment');
    }
};