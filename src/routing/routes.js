import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Dashboard from '@/pages/Dashboard.vue';
import Messages from '@/pages/Messages.vue';
import MessageDetail from '@/pages/MessageDetail.vue';
import Payments from '@/pages/Payments.vue';
import PaymentDetail from '@/pages/PaymentDetail.vue';
import PropertyDetail from '@/pages/PropertyDetail.vue';
import RequestSupport from '@/pages/RequestSupport.vue';
import SchedulePayment from '@/pages/SchedulePayment.vue';
import UserProfile from '@/pages/UserProfile.vue';
import DashboardHome from '@/pages/DashboardHome.vue';
import Login from '@/pages/Login.vue';

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
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { 
            requiresAuth: true
        },
        children: [
            {
                path: '',
                component: DashboardHome
            },
            {
                // need tenent and landlord version
                path: 'property-detail',
                component: PropertyDetail
            },
            {
                // need request management page
                path: 'request-support',
                component: RequestSupport
            },
            {
                // need payments in proceess page?
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
        component: Messages,
        meta: { 
            requiresAuth: true
        }
    },
    {
        // Message Detail
        path: '/dashboard/messages/:id',
        component: MessageDetail,
        props: true,
        meta: { 
            requiresAuth: true
        }
    },
    {
        // View All Payments
        path: '/dashboard/payments',
        component: Payments,
        meta: { 
            requiresAuth: true
        }
    },
    {
        // Payment Detail
        path: '/dashboard/payments/:id',
        component: PaymentDetail,
        props: true,
        meta: { 
            requiresAuth: true
        }
    }
];