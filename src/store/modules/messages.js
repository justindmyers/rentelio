import api from '../../api/api';

export const state = () => ({
    list: []
});

export const mutations = {
    add(state, message) {
        state.list.push(message);
    },
    emptyList(state) {
        state.list = [];
    }
};

export const getters = {
    list: state => {
        return state.list;
    }
};

export const actions = {
    async getAllMessages({ commit }) {
        commit('emptyList');

        const response = await api.getMessages();

        response.forEach(message => {
            commit('add', {
                id: message.id || message._id,
                ...message
            });
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