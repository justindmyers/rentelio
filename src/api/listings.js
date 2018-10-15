import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
    async get(id) {
        try {
            return strapi.request('get', '/listing/' + id, {
                params: {
                    _sort: 'sentAt:desc'
                }
            });
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
        }
    }
};