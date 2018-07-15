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
    }
};

export const actions = {
    async getAllPayments({ commit }) {
        commit('emptyList');

        const response = await api.getPayments();

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