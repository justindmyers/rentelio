import axios from 'axios';
import uniqid from 'uniqid';

export default {
    async get(id) {
        try {
            const requests = await axios.get('/models/maintenance-request.json');

            if(id) {
                return requests.data.find(request => request.id === id);
            }

            return requests.data;
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
        }
    },
    async create(request) {
        // Create a fake response for not
        return new Promise((resolve) => {
            resolve({
                id: uniqid(),
                tenant: "5b873629498c235ddc443451",
                lease: "leaseId1",
                title: request.title,
                date: new Date(request.date),
                description: request.description,
                status: "CREATED",
                images: request.images.map(image => image.data)
            });
        });
    },
    async remove() {

    },
    async update() {

    }
};
