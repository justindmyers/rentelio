import Strapi from 'strapi-sdk-javascript/build/main';
    
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
    get(id = '') {
        return strapi.request('get', '/payment/' + id);
    },
    add(data) {
        return strapi.request('post', '/payment', data);
    },
    remove(id) {
        return strapi.request('delete', '/payment/' + id);
    }
};
