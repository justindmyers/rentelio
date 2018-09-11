import messageApi from '../../api/messages';
import dayjs from 'dayjs';

const state = () => ({
    list: []
});

const mutations = {
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

const getters = {
    list: state => {
        return state.list.map(toViewModel);
    },
    getMessageById: state => id => {
        return state.list.filter(item => item.id === id)
                         .map(toViewModel)
                         .pop();
    }
};

// Use Message data object here?
const actions = {
    async getAllMessages({ commit }) {
        commit('emptyList');

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

function toViewModel(message) {
    return Object.freeze({
        id: message.id,
        title: message.title,
        text: message.text,
        dateSent: dayjs(message.dateSent).format('MMM DD, YYYY'),
        sender: message.sender.email
    });
}

export default {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
};