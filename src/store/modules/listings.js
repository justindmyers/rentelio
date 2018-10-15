import listingApi from '../../api/listings';

const actions = {
    async fetch({ dispatch }) {
        const response = await listingApi.get();

        if(response) {
            dispatch('create', { data: response.data });
        }
    }
};

export default {
    actions
};