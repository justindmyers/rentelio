<template>
    <div>
        <Hero :class="{ 'c-hero--small': $route.path !== '/dashboard' }">
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'/images/property.png'" alt="Hero image" />

                <span class="h-mask is-medium"></span>
            </template>

            <b-alert show dismissible variant="danger">
                Rent due in 5 days
            </b-alert>
        </Hero>

        <div class="l-dashboard">
            <transition name="slide" mode="out-in">
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
    import Hero from '../components/Hero/Hero.vue';
    import ProfileCard from '../components/ProfileCard/ProfileCard.vue';

    export default {
        name: 'Dashboard',
        components: {
            Hero,
            ProfileCard
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
