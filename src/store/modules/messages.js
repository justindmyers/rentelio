import messageApi from '../../api/messages';

const actions = {
    async fetch({ dispatch }) {
        const response = await messageApi.get();

        if(response) {
            dispatch('create', { data: response });
        }
    }
};

export default {
    actions
};