<template>
    <div class="p-dashboard container">
        <transition-expand>
            <select-property v-if="!selectedProperty || isSelectingProperty" @selected="onPropertySelected"></select-property>

            <div v-else>
                <div class="c-test">
                    <div class="l-dashboard__section c-landlord-property">
                        <div class="c-landlord-property__address">
                            <h1 class="h3">{{ selectedProperty.formattedAddress }}</h1>
                            <p class="mb-0">{{ selectedProperty.formattedAddress2 }}</p>
                        </div>

                        <button class="c-landlord-property__select" @click="changeProperty">
                            <i class="far fa-sliders-h"></i><span class="sr-only">Select Property</span>
                        </button>
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
        data() {
            return {
                isSelectingProperty: true
            };
        },
        methods: {
            changeProperty() {
                this.isSelectingProperty = true;
            },
            onPropertySelected() {
                this.isSelectingProperty = false;
            }
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

<style lang="scss">
    .c-landlord-property {
        display: flex;
        align-items: center;

        &__address {
            flex: 1;
        }

        &__select {
            font-size: 26px;
        }
    }

    .c-test {
        position: relative;
        border: 1px solid #ccc;
    }
</style>
