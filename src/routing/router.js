import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    const isPendingAuth = store.getters['user/isPendingAuth'];

    if(isPendingAuth) {
        // wait until not pending then run
        const interval = setInterval(() => {
            if(!store.getters['user/isPendingAuth']) {
                clearInterval(interval);
                processRoute();
            }
        }, 200);
    } else {
        processRoute();
    }

    function processRoute() {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            const isLoggedIn = store.getters['user/isLoggedIn'];

            if (!isLoggedIn) {
                next({
                    path: '/login',
                    query: {
                        redirect: to.fullPath
                    }
                });
            } else {
                next();
            }
        } else {
            next();
        }
    }
});

export default router;