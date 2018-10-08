<template>
    <div class="l-tenant">
        <Hero class="c-hero--dashboard c-hero--small" :class="{ 'c-hero--small': $route.path !== '/tenant/dashboard' }">
            <template slot="image">
                <lazy-img placeholder="images/placeholder.gif" src="/images/property.png" alt="Hero image" />

                <span class="h-mask is-medium"></span>
            </template>

            <b-alert show dismissible variant="danger">
                Rent due in 5 days
            </b-alert>
        </Hero>

        <div class="l-dashboard">
            <div class="back-container container" v-if="$route.path !== '/tenant/dashboard'">
                <BackButton></BackButton>
            </div>

            <transition name="slide" mode="out-in" @beforeLeave="beforeLeave" @enter="enter" @afterEnter="afterEnter">
                <router-view></router-view>
            </transition>

            <ProfileCardUser v-if="landlord" :user="landlord"></ProfileCardUser>
        </div>
    </div>
</template>

<script>
    import Hero from '@/components/Hero/Hero.vue';
    import ProfileCardUser from '@/components/ProfileCard/ProfileCardUser.vue';
    import BackButton from '@/components/BackButton/BackButton.vue';
    import bAlert from 'bootstrap-vue/es/components/alert/alert';
    import lazyImg from '@/components/lazyImg';

    import store from '@/store';

    export default {
        name: 'Dashboard',
        components: {
            Hero,
            ProfileCardUser,
            BackButton,
            bAlert,
            lazyImg
        },
        data() {
            return {
                prevHeight: 0,
            };
        },
        beforeRouteEnter (to, from, next) {
            Promise.all([
                store.dispatch('entities/listing/fetch'),
                store.dispatch('entities/maintenanceRequest/fetch'),
                store.dispatch('entities/payment/fetch'), 
                store.dispatch('entities/message/fetch'), 
                store.dispatch('entities/user/fetch')
            ]).then(() => {
                next();
            });
        },
        methods: {
            beforeLeave(element) {
                this.prevHeight = getComputedStyle(element).height;
            },
            enter(element) {
                const { height } = getComputedStyle(element);

                element.style.height = this.prevHeight;

                setTimeout(() => {
                    element.style.height = height;
                }, 30);
            },
            afterEnter(element) {
                element.style.height = 'auto';
            }
        },
        computed: {
            landlord() {
                return this.$store.getters['user/currentLandlord']
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
