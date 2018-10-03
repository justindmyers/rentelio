import userApi from '@/api/users';
import listingApi from '@/api/listings';
import leasesApi from '@/api/leases';
import { get, set } from '@/utils/vuex';

import ListingViewModel from '@/models/listing';
import LeaseViewModel from '@/models/lease';

const state = () => ({
    user: {},
    lease: {},
    listing: {},
    isAuthenticated: false,
    isPendingAuth: true
});

const mutations = {
    setUser: set('user'),
    setAuthenticated: set('isAuthenticated'),
    setListing: set('listing'),
    setLease: set('lease'),
    authChecked(state) {
        state.isPendingAuth = false;
    }
};

// use mapGetters instead
const getters = {
    currentUser: get('user'),
    lease: state => LeaseViewModel(state.lease),
    listing: state => ListingViewModel(state.listing),
    isLoggedIn: get('isAuthenticated'),
    isPendingAuth: get('isPendingAuth')
};

// Use Message data object here?
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
    },

    // Test data using .json files
    async getListings({ commit }) {
        try {
            const response = await listingApi.get('/listings.json');

            commit('setListing', response.data[0]);
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
        }
    },
    async getLeases({ commit }) {
        try {
            const response = await leasesApi.get('/leases.json');

            commit('setLease', response.data[0]);
        } catch(ex) {
            // eslint-disable-next-line
            console.log(ex);
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