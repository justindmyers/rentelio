<template>
    <div class="tiles">
        <div class="row no-gutters">
            <div class="col-md">
                <Promo></Promo>
            </div>

            <div class="col-md">
                <Promo></Promo>
            </div>
        </div>
    </div>
</template>

<script>
    import Promo from '../Promo/Promo.vue';

    export default {
        name: 'Tiles',
        components: {
            Promo
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    @include media-breakpoint-down(md) {
        .tiles{
            .col{
                flex-basis: auto;
            }
        }
    }
</style>
