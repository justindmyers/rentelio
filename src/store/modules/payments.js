import api from '../../api/api';

export const state = () => ({
    list: []
});

export const mutations = {
    add(state, payment) {
        state.list.push(payment);
    },
    update(state, payment) {
        const index = state.list.indexOf(item => item.id === payment.id);

        if(index) {
            state.list.splice(index, 1, payment);
        } else {
            state.list.push(payment);
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
    },
    async getPaymentById({ commit }, id) {
        const response = await api.getPayment(id);

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