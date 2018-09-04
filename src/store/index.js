import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages';
import payments from './modules/payments';
import user from './modules/user';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        messages,
        payments,
        user
    },
    strict: debug
    // plugins: debug ? [createLogger()] : []
});