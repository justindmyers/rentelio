<template>
    <div class="c-promo">
        <div class="c-promo__media h-placeholder-image h-placeholder-image--1-1">
            <img src="assets/news-grid-image.jpg" v-lazy-img="'assets/news-grid-image.jpg'" alt="" />
        </div>

        <span class="h-mask is-dark"></span>

        <div class="c-promo__content">
            <h2 class="c-promo__heading h3">Morrison Supply Solution Sets New Industry Standard</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Promo'
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    @include media-breakpoint-up(sm) {
        .l-promo {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    @include media-breakpoint-up(md) {
        .l-promo {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    .c-promo {
        $this: &;

        position: relative;
        display: flex;
        flex-direction: column;
        color: $white;

        &__content {
            position: absolute;
            padding: rem-calc(25) rem-calc(30);
            bottom: 0;
            max-height: 100%;

            & > *:last-child {
                margin-bottom: 0;
            }

            &.center {
                padding: rem-calc(50) rem-calc(50);
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
                width: 100%;

                .icon{
                    margin: 0 0 1rem 0;
                }
            }
        }

        &__heading {
            line-height: 1.35;
            font-weight: 600;
        }

        &--bg {
            $test: '.c-promo--bg';

            @include theme-component($colors: $colors, $properties: 'background-color', $parent: $test, $isParent: true, $includeBody: false);
        }

        &.no-link{
            &:after {
                display: none;
            }
        }

        &:after {
            content: '';
            display: block;
            background-color: #11869b;
            height: 0;
            opacity: 0;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            transition: $swift-ease-in-out;
        }

        &:hover, &:focus {
            color: $white;

            &:after {
                height: 8px;
                opacity: 1;
            }
        }
    }

    @include media-breakpoint-down(md) {
        .c-promo {
            &__actions {
                & > * {
                    display: block;
                }
            }
        }
    }

    @include media-breakpoint-up(md) {
        .c-promo {
            $this: &;

            &--border {
                padding: rem-calc(45) rem-calc(75) rem-calc(45) rem-calc(45);
                border-width: rem-calc(15);
            }

            &__icon {
                max-width: none;
            }

            &__actions {
                display: flex;
                justify-content: space-between;
            }

            &__actions--divider {
                margin-top: rem-calc(5);
            }

            &__cta-divider {
                border-right-width: 1px; // use contrast here
                border-top: none;
                margin: 0 rem-calc(15);
                padding: 0;
            }
        }
    }
</style>

