<template>
    <div class="l-main">
        <navbar></navbar>

        <main>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>

        <footer></footer>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar/Navbar.vue';
    import Footer from '../components/Footer/Footer.vue';

    export default {
        name: 'app',
        components: {
            Navbar,
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
