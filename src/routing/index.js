import VueRouter from 'vue-router';
import routes from './routes';
import { beforeEach } from './router';

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
});


router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router;