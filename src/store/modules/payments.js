import paymentApi from '../../api/payments';
import Payment from '@/models/payment';
import { pushTo, replaceRecordInList, clear, findByKey } from '@/utils/vuex';

const state = () => ({
    list: []
});

const mutations = {
    add: pushTo('list', Payment),
    update: replaceRecordInList('list', Payment),
    empty: clear('list')
};

const getters = {
    list: state => state.list.map(payment => payment.toViewModel()),
    getPaymentById: findByKey('list', 'id', payment => payment.toViewModel())
};

const actions = {
    async getAllPayments({ commit }) {
        commit('empty');

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

export default {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
};