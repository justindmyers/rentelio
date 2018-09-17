<template>
    <div class="l-main">
        <NavBar></NavBar>

        <main>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>

        <Footer></Footer>
    </div>
</template>

<script>
    import NavBar from '../components/NavBar/NavBar.vue';
    import Footer from '../components/Footer/Footer.vue';

    export default {
        name: 'app',
        components: {
            NavBar,
            Footer
        },
        created() {
            this.$store.dispatch('user/getCurrentUser');
        }
    };
</script>

<style lang="scss">
    .l-main {
        main {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
    }
</style>
