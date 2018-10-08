import paymentApi from '../../api/payments';

const actions = {
    async fetch({ dispatch }) {
        const response = await paymentApi.get();

        if(response) {
            dispatch('create', { data: response });
        }
    }
};

export default {
    namespaced: true,
    actions,
};