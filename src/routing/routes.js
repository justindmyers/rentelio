// Layouts
import TenantLayout from '@/layouts/TenantLayout.vue';
import LandlordLayout from '@/layouts/LandlordLayout.vue';

// Marketing Pages
import Home from '@/pages/marketing/Home.vue';
import About from '@/pages/marketing/About.vue';
import Info from '@/pages/marketing/Info.vue';

// Auth Pages
import Login from '@/pages/auth/Login.vue';
import Register from '@/pages/auth/Register.vue';
import ResetPassword from '@/pages/auth/ResetPassword.vue';
import ForgotPassword from '@/pages/auth/ForgotPassword.vue';
import ConfirmAccount from '@/pages/auth/ConfirmAccount.vue';

// Static Pages
import SomethingWrong from '@/pages/static/SomethingWrong.vue';
import Page404 from '@/pages/static/404.vue';
import Unauthorized from '@/pages/static/Unauthorized.vue';

// App Pages
import MessageDetail from '@/pages/MessageDetail.vue';
import Messages from '@/pages/Messages.vue';
import Payments from '@/pages/Payments.vue';
import PaymentDetail from '@/pages/PaymentDetail.vue';
import PropertyDetail from '@/pages/PropertyDetail.vue';
import RequestSupport from '@/pages/RequestSupport.vue';
import SchedulePayment from '@/pages/SchedulePayment.vue';
import UserProfile from '@/pages/UserProfile.vue';

// Tenant Page
import TenantDashboard from '@/pages/tenant/Dashboard.vue';
import MaintenanceRequest from '@/pages/tenant/MaintenanceRequest.vue';
import MaintenanceRequestDetail from '@/pages/tenant/MaintenanceRequestDetail.vue';

// Landlord Pages
import LandlordDashboard from '@/pages/landlord/Dashboard';

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
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            requiresAuth: true
        }
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
                redirect: {
                    name: 'landlord-dashboard'
                }
            },
            {
                path: 'dashboard',
                name: 'landlord-dashboard',
                component: LandlordDashboard
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
                path: '',
                redirect: {
                    name: 'tenant-dashboard'
                }
            },
            {
                path: 'dashboard',
                name: 'tenant-dashboard',
                component: TenantDashboard
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
            },
            {
                path: 'maintenance-request',
                name: 'tenant-maintenance',
                component: MaintenanceRequest
            },
            {
                path: 'maintenance-request/:id',
                name: 'tenant-maintenance-detail',
                component: MaintenanceRequestDetail,
                props: true
            }
        ]
    },
    { 
        path: '*', 
        component: Page404
    }
];