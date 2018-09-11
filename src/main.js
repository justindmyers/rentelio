import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'
import router from './routing';
import store from './store';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import MainLayout from '@/layouts/Main.vue';

import './sass/style.scss';

import modal from '@/components/modal.js';
import youtube from '@/components/youtube.js';
import lazyImg from '@/directives/lazy-img';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VeeValidate, {
    events: 'change|blur'
});

Vue.directive('lazy-img', lazyImg);
Vue.component('modal', modal);
Vue.component('youtube', youtube);

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