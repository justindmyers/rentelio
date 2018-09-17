import userApi from '../../api/users';

const state = () => ({
    user: {},
    isAuthenticated: false,
    isPendingAuth: true
});

const mutations = {
    login(state, user) {
        state.user = user;
        state.isAuthenticated = true;
    },
    authChecked(state) {
        state.isPendingAuth = false;
    }
};

// use mapGetters instead
const getters = {
    currentUser: (state) => {
        return state.user;
    },
    isLoggedIn: (state) => {
        return state.isAuthenticated;
    },
    isPendingAuth: (state) => {
        return state.isPendingAuth;
    }
};

// Use Message data object here?
const actions = {
    async login({ commit }, data) {
        const response = await userApi.login(data.username, data.password);

        commit('login', response);

        return response;
    },
    async register(context, data) {
        const response = await userApi.register(data.username, data.password);

        return response;
    },
    async forgotPassword(context, data) {
        const response = await userApi.forgotPassword(data.username);

        return response;
    },
    async getCurrentUser({ commit }) {
        try {
            const response = await userApi.getCurrentUser();

            commit('authChecked');

            if(typeof response !== 'undefined') {
                commit('login', response);
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