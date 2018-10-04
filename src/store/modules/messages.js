import messageApi from '../../api/messages';
import Message from '@/models/message';
import { pushTo, replaceRecordInList, clear, findByKey } from '@/utils/vuex';

const state = () => ({
    list: []
});

const mutations = {
    add: pushTo('list', Message),
    update: replaceRecordInList('list', Message),
    empty: clear('list')
};

const getters = {
    list: state => state.list.map(message => message.toViewModel()),
    getMessageById: findByKey('list', 'id', message => message.toViewModel())
};

const actions = {
    async getAllMessages({ commit }) {
        commit('empty');

        const response = await messageApi.get();

        response.forEach(message => {
            commit('add', {
                id: message.id || message._id,
                ...message
            });
        });
    },
    async getMessageById({ commit }, id) {
        const response = await messageApi.get(id);

        commit('update', {
            id: response.id || response._id, ...response
        });
    }
};

export default {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
};