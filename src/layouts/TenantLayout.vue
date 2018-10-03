<template>
    <div>
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

            <ProfileCard>
                <template slot="image">
                    <img src="//placehold.it/100/100" />
                </template>

                <h3 class="mb-1">Trevor Smith</h3>
                <p>Landlord</p>

                <p class="mb-1">Mobile: <a href="tel:1-310-431-0012">1-310-231-0012</a></p>
                <p class="mb-0">Email: <a href="mailto:tsmith@email.com">tsmith@email.com</a></p>
            </ProfileCard>
        </div>
    </div>
</template>

<script>
    import Hero from '@/components/Hero/Hero.vue';
    import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';
    import BackButton from '@/components/BackButton/BackButton.vue';
    import bAlert from 'bootstrap-vue/es/components/alert/alert';
    import lazyImg from '@/components/lazyImg';

    import store from '@/store';
    import { mapActions } from 'vuex';

    export default {
        name: 'Dashboard',
        components: {
            Hero,
            ProfileCard,
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
                store.dispatch('payments/getAllPayments'), 
                store.dispatch('messages/getAllMessages'), 
                store.dispatch('user/getListings'),
                store.dispatch('user/getLeases')
            ]).then(() => {
                next();
            });
        },
        methods: {
            ...mapActions({
                getPayments: 'payments/getAllPayments',
                getMessages: 'messages/getAllMessages',
                getListings: 'user/getListings',
                getLeases: 'user/getLeases'
            }),
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
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
