import store from '../store';

export function beforeEach(to, from, next) {
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
        const user = store.getters['user/currentUser'];
        const isLoggedIn = store.getters['user/isLoggedIn'];
        const dashboardRoute = user.isLandlord ? 'landlord-dashboard' : user.isTenant ? 'tenant-dashboard' : 'something-wrong';

        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!isLoggedIn) {
                redirectToLogin(to.fullPath);
            } else if (to.matched.some(record => record.meta.isLandlord) && !user.isLandlord) {
                next({ name: 'unauthorized' });
            } else if (to.matched.some(record => record.meta.isTenant) && !user.isTenant) {
                next({ name: 'unauthorized' });
            } else {
                next();
            }
        } else if (to.matched.some(record => record.meta.isGuest)) {
            if(isLoggedIn) {
                if(to.query.redirect) {
                    next({ path: to.query.redirect });
                } else {
                    next({ name: dashboardRoute });
                }
            } else {
                next();
            }
        } else {
            next();
        }
    }

    function redirectToLogin(path) {
        next({
            path: '/login',
            query: {
                redirect: path
            }
        });
    }
}
