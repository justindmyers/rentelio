<template>
    <div class="p-dashboard container">
        <div v-if="lease">
            <div class="l-dashboard__section">
                <h1 class="h3">{{ listing.formattedAddress }}</h1>
                <p>{{ listing.formattedAddress2 }}</p>
            </div>

            <div class="l-dashboard__section">
                <IconNav>
                    <IconNavItem>
                        <router-link :to="{ name: 'tenant-property-detail' }">
                            <i class="fal fa-info-circle"></i> Property<br/> Info
                        </router-link>
                    </IconNavItem>

                    <IconNavItem>
                        <router-link :to="{ name: 'tenant-request-support' }">
                            <i class="fal fa-wrench"></i> Request<br/> Support
                        </router-link>
                    </IconNavItem>

                    <IconNavItem>
                        <router-link :to="{ name: 'tenant-schedule-payment' }">
                            <i class="fal fa-credit-card"></i> Make a<br/> Payment
                        </router-link>
                    </IconNavItem>

                    <IconNavItem>
                        <router-link :to="{ name: 'tenant-profile' }">
                            <i class="fal fa-user-circle"></i> Your<br/> Profile
                        </router-link>
                    </IconNavItem>
                </IconNav>
            </div>

            <div class="l-dashboard__section">
                <Listing type="Messages" title-key="title" date-key="dateSent" :list="messages" view-all-path="/tenant/messages" :show-view-all="true"></Listing>
            </div>

            <div class="l-dashboard__section">
                <Listing type="Payments" title-key="description" date-key="paymentDate" :list="payments" view-all-path="/tenant/payments" :show-view-all="true"></Listing>
            </div>

            <div class="l-dashboard__section">
                <Listing type="Maintenance Requests" title-key="title" date-key="date" :list="maintenanceRequests" view-all-path="/tenant/maintenance-request" :show-view-all="true"></Listing>
            </div>
        </div>

        <div v-else>
            <div class="l-dashboard__section">
                <div class="alert alert-info">
                    You do not have a current lease. If you believe this is in error, please contact your landlord or email Rentelio support.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import IconNav from '@/components/IconNav/IconNav.vue';
    import Listing from '@/components/Listing/Listing.vue';
    import IconNavItem from '@/components/IconNav/IconNavItem.vue';

    export default {
        name: 'DashboardHome',
        components: {
            IconNav,
            Listing,
            IconNavItem
        },
        computed: {
            lease() {
                return this.$store.getters['user/currentLease'];
            },
            listing() {
                return this.lease.listing.toViewModel;
            },
            messages() {
                return this.$store.getters['entities/message/query']()
                                  .withAll()
                                  .all()
                                  .map(message => message.toViewModel);
            },
            maintenanceRequests() {
                return this.$store.getters['entities/maintenanceRequest/query']()
                                  .withAll()
                                  .all()
                                  .map(request => request.toViewModel);
            },
            payments() {
                return this.$store.getters['entities/payment/query']()
                                  .withAll()
                                  .all()
                                  .map(payment => payment.toViewModel);
            },
            users() {
                return this.$store.getters['entities/user/query']()
                                  .withAll()
                                  .all()
                                  .map(user => user);
            }
        }
    };
</script>
