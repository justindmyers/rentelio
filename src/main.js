import Vue from 'vue';
import Vuex from 'vuex';
import router from './routing';
import store from './store';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import MainLayout from '@/layouts/Main.vue';

import './sass/style.scss';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VeeValidate, {
    events: 'change|blur'
});

Vue.config.productionTip = false

var isCordovaApp = !!window.cordova;

const app = {
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        initVue();
    },
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        /* eslint-disable-next-line */
        console.log('Received Event: ' + id);
    }
};

if(isCordovaApp) {
    app.initialize();
} else {
    initVue();
}

function initVue() {
    new Vue({
        router,
        store,
        el: '#app',
        components: {
            MainLayout
        },
        render: function(createElement) {
            return createElement(MainLayout);
        }
    });
}