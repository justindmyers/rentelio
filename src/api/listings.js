import axios from 'axios';

export default {
    async get() {
        try {
            return axios.get('/models/listings.json');
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
        }
    }
};