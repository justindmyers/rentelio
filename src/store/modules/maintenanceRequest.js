import maintenanceApi from '../../api/maintenance';
import MaintenanceRequest from '@/models/maintenance';
import { pushTo, replaceRecordInList, clear, findByKey } from '@/utils/vuex';

const state = () => ({
    list: []
});

const mutations = {
    add: pushTo('list', MaintenanceRequest),
    update: replaceRecordInList('list', MaintenanceRequest),
    empty: clear('list')
};

const getters = {
    list: state => state.list.map(model => model.toViewModel()),
    getRequestById: findByKey('list', 'id', model => model.toViewModel())
};

const actions = {
    async getAllRequests({ commit }) {
        commit('empty');

        const response = await maintenanceApi.get();

        response.forEach(data => {
            commit('add', {
                id: data.id || data._id,
                ...data
            });
        });
    },
    async getRequestById({ commit }, id) {
        const response = await maintenanceApi.get(id);

        commit('update', {
            id: response.id || response._id, 
            ...response
        });
    },
    async createRequest({ commit }, request) {
        const response = await maintenanceApi.create(request);

        commit('add', response);
    }
};

export default {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
};