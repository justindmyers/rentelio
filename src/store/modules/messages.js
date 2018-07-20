import api from '../../api/api';

export const state = () => ({
    list: []
});

export const mutations = {
    add(state, message) {
        state.list.push(message);
    },
    update(state, message) {
        const messageItem = state.list.find(item => item.id === message.id);

        if(typeof messageItem !== 'undefined') {
            state.list.splice(state.list.indexOf(messageItem), 1, message);
        } else {
            state.list.push(message);
        }
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
    },
    async getMessageById({ commit }, id) {
        const response = await api.getMessage(id);

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