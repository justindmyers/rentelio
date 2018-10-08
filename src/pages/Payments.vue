<template>
    <div class="p-payments">
        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <Listing type="Payments" title-key="description" date-key="paymentDate" :list="payments" view-all-path="payments"></Listing>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '../components/Hero/Hero.vue';
    import Listing from '../components/Listing/Listing.vue';

    export default {
        name: 'app',
        components: {
            Hero,
            Listing
        },
        computed: {
            payments() {
                return this.$store.getters['entities/payment/query']()
                                  .withAll()
                                  .get()
                                  .map(message => message.toViewModel);
            }
        }
    };
</script>