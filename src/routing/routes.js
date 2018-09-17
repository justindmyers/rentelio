import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Info from '@/pages/Info.vue';
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
import Register from '@/pages/Register.vue';
import ResetPassword from '@/pages/ResetPassword.vue';
import ForgotPassword from '@/pages/ForgotPassword.vue';
import Unauthorized from '@/pages/Unauthorized.vue';
import ConfirmAccount from '@/pages/ConfirmAccount.vue';
import SomethingWrong from '@/pages/SomethingWrong.vue';

import TenantLayout from '@/layouts/TenantLayout.vue';
import LandlordLayout from '@/layouts/LandlordLayout.vue';

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
        path: '/info',
        component: Info
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: ResetPassword,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/confirm-account',
        name: 'confirm-account',
        component: ConfirmAccount,
        meta: {
            isGuest: true
        }
    },
    {
        path: '/unauthorized',
        component: Unauthorized,
        name: 'unauthorized'
    },
    {
        path: '/something-wrong',
        component: SomethingWrong,
        name: 'something-wrong'
    },
    {
        path: '/landlord',
        component: LandlordLayout,
        meta: {
            requiresAuth: true,
            isLandlord: true
        },
        children: [
            {
                path: '',
                component: DashboardHome
            },
            {
                path: 'profile',
                component: UserProfile
            }
        ]
    },
    {
        path: '/tenant',
        component: TenantLayout,
        meta: {
            requiresAuth: true,
            isTenant: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'tenant-dashboard',
                component: DashboardHome
            },
            {
                path: 'property-detail',
                name: 'tenant-property-detail',
                component: PropertyDetail
            },
            {
                path: 'request-support',
                name: 'tenant-request-support',
                component: RequestSupport
            },
            {
                path: 'schedule-payment',
                name: 'tenant-schedule-payment',
                component: SchedulePayment
            },
            {
                path: 'profile',
                name: 'tenant-profile',
                component: UserProfile
            },
            {
                path: 'messages',
                name: 'tenant-messages',
                component: Messages
            },
            {
                path: 'messages/:id',
                name: 'tenant-message-detail',
                component: MessageDetail,
                props: true
            },
            {
                path: 'payments',
                name: 'tenant-payments',
                component: Payments
            },
            {
                path: 'payments/:id',
                name: 'tenant-payment-detail',
                component: PaymentDetail,
                props: true
            }
        ]
    }
];