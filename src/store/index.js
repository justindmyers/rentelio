import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages';
import payments from './modules/payments';
import user from './modules/user';
import maintenanceRequest from './modules/maintenanceRequest';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        messages,
        payments,
        user,
        maintenanceRequest
    },
    strict: debug
    // plugins: debug ? [createLogger()] : []
});