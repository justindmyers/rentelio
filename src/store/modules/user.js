import userApi from '@/api/users';
import { get, set } from '@/utils/vuex';

const state = () => ({
    user: {},
    alerts: {},
    isAuthenticated: false,
    isPendingAuth: true,
    previousRoute: null
});

const mutations = {
    setUser: set('user'),
    setAuthenticated: set('isAuthenticated'),
    setPreviousRoute: set('previousRoute'),
    authChecked(state) {
        state.isPendingAuth = false;
    }
};

// use mapGetters instead
const getters = {
    currentUser: get('user'),
    isLoggedIn: get('isAuthenticated'),
    isPendingAuth: get('isPendingAuth'),
    previousRoute: get('previousRoute'),
    currentLease(state, getters, rootState, rootGetters) {
        return rootGetters['entities/lease/query']().where('tenant', state.user.id)
                                                           .withAll()
                                                           .get()
                                                           .map(lease => lease.toViewModel)
                                                           .pop()
    }
};

const actions = {
    async login({ commit }, data) {
        const response = await userApi.login(data.username, data.password);

        commit('setAuthenticated', true);
        commit('setUser', response.user);

        return response;
    },
    logout({ commit }) {
        return new Promise(function(resolve, reject) {
            try {
                userApi.logout();

                commit('setAuthenticated', false);
                commit('setUser', {});

                resolve(true);
            } catch(ex) {
                reject(ex);
            }
        });
    },
    async register(context, data) {
        return userApi.register(data.username, data.password);
    },
    async forgotPassword(context, data) {
        return userApi.forgotPassword(data.username);
    },
    async resetPassword(context, data) {
        return userApi.resetPassword(data.code, data.password);
    },
    async getCurrentUser({ commit }) {
        try {
            const response = await userApi.getCurrentUser();

            commit('authChecked');

            if(typeof response !== 'undefined') {
                commit('setAuthenticated', true);
                commit('setUser', response);
            }
        } catch(ex) {
            commit('authChecked');
        }
    }
};

export default {
    namespaced: true,
    mutations,
    getters,
    actions,
    state
};