<template>
    <div class="c-testimonial" :class="{ 'is-opposite' : opposite }">
        <div class="c-testimonial__container container container-fluid">
            <div class="row no-gutters">
                <template v-if="!opposite">
                    <div class="col-4 d-flex align-items-center">
                        <div class="c-testimonial__image">
                            <slot name="image"></slot>
                        </div>
                    </div>

                    <div class="col-8 d-flex align-items-center">
                        <div class="c-testimonial__content">
                            <slot></slot>
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div class="col-8 d-flex align-items-center">
                        <div class="c-testimonial__content">
                            <slot></slot>
                        </div>
                    </div>

                    <div class="col-4 d-flex align-items-center">
                        <div class="c-testimonial__image">
                            <slot name="image"></slot>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Testimonial',
        props: {
            opposite: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-testimonial {
        $this: &;

        padding: rem-calc(30) rem-calc(10);
        position: relative;
        z-index: 0;

        &__image {
            border-radius: 50%;
            overflow: hidden;
        }

        &__content {
            font-size: rem-calc(13);
            line-height: 1.35;
            font-style: italic;
            margin-left: rem-calc(22);

            & * {
                margin-bottom: rem-calc(10);
            }
        }

        &__name {
            text-align: right;
            font-weight: 600;
            font-style: normal;
            color: $primary;
        }

        &.is-opposite {
             /deep/ #{$this}__content {
                margin-left: 0;
                margin-right: rem-calc(22);
            }
        }

        & + .c-testimonial {
            padding-top: 0;
        }
    }

    .c-blockquote {
        position: relative;

        &:before, &:after {
            content: "";
            background-image: url(~@/assets/quote-icon.svg);
            position: absolute;
            width: 106px;
            height: 90px;
            opacity: .9;
            z-index: -1;
            background-repeat: no-repeat;
        }

        &:before {
            top: 0;
            left: -35px;
        }

        &:after {
            bottom: 0;
            right: 0;
            transform: rotate(180deg);
        }
    }
</style>
