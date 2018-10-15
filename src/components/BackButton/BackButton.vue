<template>
    <button class="button-back" v-on:click="goBack" type="button">
        <i class="fas fa-arrow-left"></i> Back
    </button>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'BackButton',
        methods: {
            goBack() {
                this.previousRoute ? this.$router.back() : this.$router.push({ name: this.homePath });
            }
        },
        props: {
            homePath: {
                required: true,
                default: 'dashboard'
            }
        },
        computed: {
            ...mapGetters({
                previousRoute: 'user/previousRoute'
            })
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .button-back {
        @include reset-button();

        margin-top: rem-calc(20);
        display: inline-flex;
        align-items: center;
        line-height: 1;
        
        i {
            margin-right: rem-calc(10);
            font-size: rem-calc(20);
        }
    }
</style>