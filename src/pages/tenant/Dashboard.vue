<template>
    <div class="p-dashboard container">
        <div v-if="lease">
            <div class="l-dashboard__section">
                <h1 class="h3">{{ address }}</h1>
                <p>{{ address2 }}</p>
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
                return this.$store.getters['entities/listing/query']()
                                  .where('id', this.lease.listing)
                                  .get()
                                  .map(listing => listing.toViewModel)
                                  .pop();
            },
            address() {
                return this.listing ? this.listing.formattedAddress() : null;
            },
            address2() {
                return this.listing ? this.listing.formattedAddress2() : null;
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
                                  .map(request => request.toViewModel);
            },
            users() {
                return this.$store.getters['entities/user/query']()
                                  .withAll()
                                  .all()
                                  .map(request => request);
            }
        }
    };
</script>
