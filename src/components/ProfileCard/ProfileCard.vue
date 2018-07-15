<template>
    <div class="c-profile-card">
        <div class="c-profile-card__media">
            <slot name="image"></slot>
        </div>

        <div class="c-profile-card__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfileCard'
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-profile-card {
        $this: &;

        background-color: #F5F5F5;
        text-align: center;
        padding: 30px;

        &__media {
            margin-bottom: rem-calc(20);

            img {
                width: 100px;
                border-radius: 50%;
            }
        }
    }
</style>