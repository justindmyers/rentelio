import leasesApi from '../../api/leases';

const actions = {
    async fetch({ dispatch }) {
        const response = await leasesApi.get('/leases.json');

        if(response) {
            dispatch('create', { data: response.data });
        }
    }
};

export default {
    actions
};