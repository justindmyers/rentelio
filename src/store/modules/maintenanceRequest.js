import maintenanceApi from '../../api/maintenance';

const actions = {
    async fetch({ dispatch }) {

        const response = await maintenanceApi.get();

        if(response) {
            dispatch('create', { data: response });
        }
    },
    async createRequest({ dispatch }, request) {
        const response = await maintenanceApi.create(request);

        if(response) {
            dispatch('insert', { data: response });
        }
    }
};

export default {
    actions
};