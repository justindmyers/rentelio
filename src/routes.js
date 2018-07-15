import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Dashboard from './pages/Dashboard.vue';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/account',
        component: Home
    },
    {
        path: '/info',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/tenant',
        children: [
            {
                path: '',
                excludeFromNav: true,
                redirect: 'dashboard'
            },
            {
                path: 'dashboard',
                component: Home
            },
            {
                path: 'info',
                component: Home
            },
            {
                path: 'maintenance',
                component: Home
            },
            {
                path: 'payment',
                component: Home
            }
        ]
    },
    {
        path: '/landlord',
        children: [
            {
                path: 'property',
                component: Home
            }
        ]
    }
];