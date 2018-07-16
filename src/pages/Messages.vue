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
                    <Listing type="Messages" title-key="title" date-key="sentAt" :list="messages" view-all-path="dashboard/messages"></Listing>
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
            messages() {
                return this.$store.getters['messages/list'];
            }
        },
        mounted() {
            this.$store.dispatch('messages/getAllMessages');
        },
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .l-dashboard {
        &__section {
            padding: rem-calc(30) 0 rem-calc(25);
            border-bottom: 1px solid #e3e3e3;

            & > *:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>
