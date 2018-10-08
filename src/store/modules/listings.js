import listingApi from '../../api/listings';

const actions = {
    async fetch({ dispatch }) {
        const response = await listingApi.get('/listings.json');

        if(response) {
            dispatch('create', { data: response.data });
        }
    }
};

export default {
    actions
};