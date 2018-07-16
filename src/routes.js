import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Dashboard from './pages/Dashboard.vue';
import Messages from '@/pages/Messages.vue';
import MessageDetail from '@/pages/MessageDetail.vue';
import Payments from '@/pages/Payments.vue';
import PaymentDetail from '@/pages/PaymentDetail.vue';

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
        // View All Messages
        path: '/dashboard/messages',
        component: Messages
    },
    {
        // Message Detail
        path: '/dashboard/messages/:id',
        component: MessageDetail,
        props: true
    },
    {
        // View All Payments
        path: '/dashboard/payments',
        component: Payments
    },
    {
        // Payment Detail
        path: '/dashboard/payments/:id',
        component: PaymentDetail,
        props: true
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