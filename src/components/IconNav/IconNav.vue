<template>
    <nav>
        <ul class="c-icon-nav nav">
            <slot></slot>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'IconNav'
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-icon-nav {
        display: flex;
        justify-content: space-between;
        padding: 0 rem-calc(10);
    }
</style>