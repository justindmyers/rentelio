<template>
    <div>
        <h1>Select Property</h1>

        <div class="l-dashboard">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Hero from '../components/Hero/Hero.vue';

    export default {
        name: 'Dashboard',
        components: {
            Hero
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
