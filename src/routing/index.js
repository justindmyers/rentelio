import VueRouter from 'vue-router';
import routes from './routes';
import { beforeEach } from './router';

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router;