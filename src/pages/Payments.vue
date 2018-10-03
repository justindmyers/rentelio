<template>
    <div class="p-payments">
        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <Listing type="Payments" title-key="description" date-key="paymentDate" :list="payments"></Listing>
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
                return this.$store.getters['payments/list'];
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
