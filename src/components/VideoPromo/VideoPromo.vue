<template>
    <div class="c-video-promo">
        <button class="c-video-promo__media h-placeholder-image h-placeholder-image--bg h-video-play" v-b-modal="'uniqueModalId'">
            <img src="@/assets/placeholder.gif" v-lazy-img="'//placeimg.com/1200/600'" alt="" />

            <span class="h-mask is-dark"></span>
        </button>

        <Youtube trigger="uniqueModalId" video-id="M7lc1UVf-VE"></Youtube>
    </div>
</template>

<script>
    import Youtube from '../youtube';

    export default {
        name: 'VideoPromo',
        components: {
            Youtube
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-video-promo {
        $this: &;

        position: relative;
        min-height: 300px;
        display: flex;
        overflow: hidden;

        &__text{
            position: absolute;
            padding: 3rem;
            bottom: 0;
            text-align: center;
            width: 100%;
            display: flex;
            height: 100%;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &:before {
            height: 300px;
            content: '';
            display: block;
        }

        &__media {
            display: block;
            width: 100%;
            border: none;
            padding: 0;
        }

        &__content-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }

        &__kicker {
            position: relative;
            background: $white;
            padding: rem-calc(10) rem-calc(15);
            color: $black;
            z-index: 1;
        }

        &__heading {
            margin-bottom: rem-calc(45);
        }

        &__link {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        button.c-video-promo__link {
            background: none;
            padding: 0;
            border: none;
            width: 90px;
            height: 90px;
            top: 50%;
            left: 50%;
            right: auto;
            bottom: auto;
            margin-left: -45px;
            margin-top: -45px;
        }

        &__content {
            text-align: center;
            width: 100%;
            padding-top: rem-calc(60);
            position: relative;
        }

        &__social {
            margin-bottom: rem-calc(20);
            display: inline-block;
            position: relative;
            z-index: 1;
        }

        &--no-label {
            #{$this}__content-container:before {
                content: '';
            }
        }

        &--inline {
            min-height: 0 !important;

            &:before {
                height: auto !important;
            }

            #{$this}__media img {
                width: 100%;
            }
        }

        &--scaled {
            min-height: auto !important;

            .h-placeholder-image img {
                position: static;
            }

            &:before {
                height: auto !important;
            }
        }

        &.c-promo__border {
            padding: 0;
        }
    }

    .video-alt{
        .h-video-play {
            &:after {
                display: none;
            }
        }

        .video-play{
            position: relative;
            height: auto;
            width: auto;
            opacity: 1;
        }
    }

    @include media-breakpoint-up(sm) {
        .c-video-promo {
            min-height: 400px;

            &:before {
                height: 400px;
            }

            button.c-video-promo__link {
                width: 150px;
                height: 150px;
                margin-left: -75px;
                margin-top: -75px;
            }

            &__heading {
                margin-bottom: rem-calc(65);
            }
        }
    }

    @include media-breakpoint-up(md) {
        .c-video-promo {
            min-height: 500px;

            &:before {
                height: 500px;
            }

            &__kicker {
                padding: rem-calc(14) rem-calc(20);
            }
        }
    }

    @include media-breakpoint-down(md) {
        .c-video-promo {
            &__text{
                h2{
                    font-size: 1.25rem;
                }
            }
        }   
        
        .video-alt{
            .video-play{
                height: 75px;
                width: 75px;
            }
        }
    }
    </style>
