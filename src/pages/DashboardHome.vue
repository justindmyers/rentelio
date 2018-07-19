<template>
    <div class="container">
        <div class="l-dashboard__section">
            <h1 class="h3">592 Highland Avenue</h1>
            <p>Los Angeles, CA 90019</p>
        </div>

        <div class="l-dashboard__section">
            <IconNav>
                <IconNavItem>
                    <router-link to="/dashboard/property-detail">
                        <i class="fas fa-info"></i> Property<br/> Info
                    </router-link>
                </IconNavItem>

                <IconNavItem>
                    <router-link to="/dashboard/request-support">
                        <i class="fas fa-wrench"></i> Request<br/> Support
                    </router-link>
                </IconNavItem>

                <IconNavItem>
                    <router-link to="/dashboard/schedule-payment">
                        <i class="far fa-credit-card"></i> Make a<br/> Payment
                    </router-link>
                </IconNavItem>

                <IconNavItem>
                    <router-link to="/dashboard/profile">
                        <i class="fas fa-user"></i> Your<br/> Profile
                    </router-link>
                </IconNavItem>
            </IconNav>
        </div>

        <router-view></router-view>

        <div class="l-dashboard__section">
            <Listing type="Messages" title-key="title" date-key="sentAt" :list="messages" view-all-path="dashboard/messages" :show-view-all="true"></Listing>
        </div>

        <div class="l-dashboard__section">
            <Listing type="Payments" title-key="title" date-key="date" :list="payments" view-all-path="dashboard/payments" :show-view-all="true"></Listing>
        </div>
    </div>
</template>

<script>
    import IconNav from '../components/IconNav/IconNav.vue';
    import Listing from '../components/Listing/Listing.vue';
    import IconNavItem from '../components/IconNav/IconNavItem.vue';

    export default {
        name: 'DashboardHome',
        components: {
            IconNav,
            Listing,
            IconNavItem
        },
        computed: {
            payments() {
                return this.$store.getters['payments/list'];
            },
            messages() {
                return this.$store.getters['messages/list'];
            }
        },
        mounted() {
            this.$store.dispatch('payments/getAllPayments');
            this.$store.dispatch('messages/getAllMessages');
        }
    };
</script>
