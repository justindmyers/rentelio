import api from '../../api/api';

export const state = () => ({
    list: []
});

export const mutations = {
    add(state, payment) {
        state.list.push(payment);
    },
    emptyList(state) {
        state.list = [];
    }
};

export const getters = {
    list: state => {
        return state.list;
    },
    getPaymentById: state => id => {
        // Need to check to see if data has been loaded first
        return state.list.find(item => item.id === id);
    }
};

export const actions = {
    async getAllPayments({ commit }, config) {
        commit('emptyList');

        const response = await api.getPayments(config);

        response.forEach(payment => {
            commit('add', {
                id: payment.id || payment._id,
                ...payment
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