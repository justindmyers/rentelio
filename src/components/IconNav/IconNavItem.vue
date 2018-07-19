<template>
    <li class="c-icon-nav__item">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'IconNavItem'
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-icon-nav__item {
        display: flex;
        flex-direction: column;
        text-align: center;
        line-height: 1.3;
        color: #535D68;
        font-size: rem-calc(14);

        /deep/ a {
            display: flex;
            flex-direction: column;
            text-align: center;
            color: #535D68;
        }

        /deep/ i {
            color: #535D68;
            font-size: rem-calc(35);
            margin-bottom: rem-calc(10);
        }
    }
</style>