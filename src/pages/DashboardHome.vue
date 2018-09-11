<template>
    <div class="p-dashboard container">
        <div class="l-dashboard__section">
            <h1 class="h3">592 Highland Avenue</h1>
            <p>Los Angeles, CA 90019</p>
        </div>

        <div class="l-dashboard__section">
            <IconNav>
                <IconNavItem>
                    <router-link :to="{ name: 'tenant-property-detail' }">
                        <i class="fas fa-info"></i> Property<br/> Info
                    </router-link>
                </IconNavItem>

                <IconNavItem>
                    <router-link :to="{ name: 'tenant-request-support' }">
                        <i class="fas fa-wrench"></i> Request<br/> Support
                    </router-link>
                </IconNavItem>

                <IconNavItem>
                    <router-link :to="{ name: 'tenant-schedule-payment' }">
                        <i class="far fa-credit-card"></i> Make a<br/> Payment
                    </router-link>
                </IconNavItem>

                <IconNavItem>
                    <router-link :to="{ name: 'tenant-profile' }">
                        <i class="fas fa-user"></i> Your<br/> Profile
                    </router-link>
                </IconNavItem>
            </IconNav>
        </div>

        <router-view></router-view>

        <div class="l-dashboard__section">
            <Listing type="Messages" title-key="title" date-key="dateSent" :list="messages" view-all-path="/tenant/messages" :show-view-all="true"></Listing>
        </div>

        <div class="l-dashboard__section">
            <Listing type="Payments" title-key="description" date-key="paymentDate" :list="payments" view-all-path="/tenant/payments" :show-view-all="true"></Listing>
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
