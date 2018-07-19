<template>
    <div>
        <Hero>
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'/images/property.png'" alt="Hero image" />

                <span class="h-mask is-medium"></span>
            </template>
        </Hero>

        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <Listing type="Payments" title-key="title" date-key="sentAt" :list="payments" view-all-path="/dashboard/payments"></Listing>
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
        },
        mounted() {
            this.$store.dispatch('payments/getAllPayments');
        },
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
