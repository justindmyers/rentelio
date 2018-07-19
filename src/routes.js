import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Dashboard from './pages/Dashboard.vue';
import Messages from '@/pages/Messages.vue';
import MessageDetail from '@/pages/MessageDetail.vue';
import Payments from '@/pages/Payments.vue';
import PaymentDetail from '@/pages/PaymentDetail.vue';
import PropertyDetail from '@/pages/PropertyDetail.vue';
import RequestSupport from '@/pages/RequestSupport.vue';
import SchedulePayment from '@/pages/SchedulePayment.vue';
import UserProfile from '@/pages/UserProfile.vue';
import DashboardHome from '@/pages/DashboardHome.vue';

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
        component: Dashboard,
        children: [
            {
                path: '',
                component: DashboardHome
            },
            {
                path: 'property-detail',
                component: PropertyDetail
            },
            {
                path: 'request-support',
                component: RequestSupport
            },
            {
                path: 'schedule-payment',
                component: SchedulePayment
            },
            {
                path: 'profile',
                component: UserProfile
            }
        ]
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