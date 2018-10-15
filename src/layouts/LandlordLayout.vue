<template>
    <div class="l-landlord">
        <Hero class="c-hero--dashboard c-hero--small">
            <template slot="image">
                <lazy-img placeholder="images/placeholder.gif" src="/images/property.png" alt="Hero image" />

                <span class="h-mask is-medium"></span>
            </template>
        </Hero>

        <div class="l-dashboard">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Hero from '@/components/Hero/Hero.vue';
    import lazyImg from '@/components/lazyImg';

    import store from '@/store';

    export default {
        name: 'Dashboard',
        components: {
            Hero,
            lazyImg
        },
        beforeRouteEnter (to, from, next) {
            Promise.all([
                store.dispatch('entities/maintenanceRequest/fetch'),
                store.dispatch('entities/payment/fetch'), 
                store.dispatch('entities/message/fetch'), 
                store.dispatch('entities/user/fetch')
            ]).then(() => {
                next();
            });
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
