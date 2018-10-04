import axios from 'axios';

export default {
    async get() {
        try {
            return axios.get('/models/leases.json');
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
        }
    },
    async renew() {

    },
    async accept() {

    },
    async create() {
        
    }
};
