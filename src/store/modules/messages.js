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
    },
    getMessageById: state => id => {
        // Need to check to see if data has been loaded first
        return state.list.find(item => item.id === id);
    }
};

export const actions = {
    async getAllMessages({ commit }, config) {
        commit('emptyList');

        const response = await api.getMessages(config);

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