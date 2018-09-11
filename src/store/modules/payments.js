import paymentApi from '../../api/payments';
import dayjs from 'dayjs';

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
        return state.list.map(toViewModel);
    },
    getPaymentById: state => id => {
        return state.list.filter(item => item.id === id)
                         .map(toViewModel)
                         .pop();
    }
};

export const actions = {
    async getAllPayments({ commit }) {
        commit('emptyList');

        const response = await paymentApi.get();

        response.forEach(payment => {
            commit('add', {
                id: payment.id || payment._id,
                ...payment
            });
        });
    },
    async getPaymentById({ commit }, id) {
        const response = await paymentApi.get(id);

        commit('update', {
            id: response.id || response._id, ...response
        });
    }
};

function toViewModel(payment) {
    return Object.freeze({
        id: payment.id,
        description: payment.description,
        amount: payment.amount,
        paymentDate: dayjs(payment.paymentDate).format('MMM DD, YYYY'),
        status: payment.status
    });
}

export default {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
};