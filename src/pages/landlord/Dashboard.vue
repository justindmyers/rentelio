<template>
    <div class="p-dashboard container">
        <transition-expand>
            <select-property v-if="!selectedProperty"></select-property>

            <div v-else>
                <div class="l-dashboard__section">
                    <h1 class="h3">{{ selectedProperty.formattedAddress }}</h1>
                    <p>{{ selectedProperty.formattedAddress2 }}</p>
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
        </transition-expand>
    </div>
</template>

<script>
    import Listing from '@/components/Listing/Listing';
    import SelectProperty from '@/components/SelectProperty/SelectProperty';
    import transitionExpand from '@/components/transitionExpand';

    export default {
        name: 'LandlordDashboard',
        components: {
            Listing,
            SelectProperty,
            transitionExpand
        },
        computed: {
            selectedProperty() {
                return this.$store.getters['user/selectedProperty'];
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
            }
        }
    };
</script>
