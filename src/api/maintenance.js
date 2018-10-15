import Strapi from 'strapi-sdk-javascript/build/main';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default {
    async get(id = '') {
        try {
            return strapi.request('get', '/request/' + id);
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
        }
    },
    async create(request) {
        return strapi.request('post', '/request', {
            data: {
                lease: request.leaseId,
                title: request.title,
                date: new Date(request.date),
                description: request.description,
                images: request.images.map(image => image.data)
            }
        });
    },
    async remove() {

    },
    async update() {

    }
};
