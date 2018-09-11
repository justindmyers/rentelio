<template>
    <button class="buttton-back" v-on:click="goBack" type="button">
        <i class="fas fa-arrow-left"></i> Back
    </button>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1);
            }
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

