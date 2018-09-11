<template>
    <div class="c-hero">
        <div class="c-hero__container">
            <div class="c-hero__media h-placeholder-image h-placeholder-image--bg">
                <slot name="image"></slot>
            </div>

            <div class="c-hero__content-container">
                <div class="container container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="c-hero__content">
                                <slot></slot>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Hero'
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    $hero-margin: 0 !default;
    $hero-content-padding: rem-calc(175) rem-calc(15) rem-calc(30) !default;
    $hero-content-container-padding: 0 0 rem-calc(60) !default;

    $hero-heading-color: $white;

    $hero-subheading-color: $gray-600 !default;
    $hero-subheading-line-height: 1.5;
    $hero-subheading-margin: 0 0 rem-calc(24) 0;

    $hero-cta-margin: rem-calc(15) 0 0 0;

    .c-hero {
        $this: &;

        margin: $hero-margin;
        position: relative;
        transition: .2s ease all;

        &__content-container {
            padding: $hero-content-container-padding;
        }

        &__content {
            padding: $hero-content-padding;
            max-width: 700px;
            color: $white;

            & > *:last-child {
                margin-bottom: 0;
            }

            @include theme-component($colors: $colors, $properties: 'border-bottom-color', $parent: $this);
        }

        &__heading {
            color: $hero-heading-color;
            letter-spacing: 1px;
            font-weight: 700;
            line-height: 1.1;
        }

        &__subheading {
            line-height: $hero-subheading-line-height;
            margin: $hero-subheading-margin;
        }

        &__media {
            display: block;
            width: 100%;
            border: none;

            img {
                max-width: 100%;
            }
        }

        &__cta {
            margin: $hero-cta-margin;
            cursor: pointer;

            @include theme-component($colors: $colors, $properties: 'color', $parent: $this);
        }

        &__content-scroll {
            position: relative;
            bottom: 30px;
            text-align: center;
            top: 30px;
            margin-top: 15px;
            display: block;
        }

        &--dashboard {
            max-height: 275px;
            overflow: hidden;
        }

        &--small {
            max-height: 150px;
        }

        .alert {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            background-color: #B3325E;
            color: $white;
            border: none;
        }
    }

    @include media-breakpoint-up(sm) { 
        .c-hero-card {
            &__container {
                position: relative;
                text-align: right;
                display: flex;
                align-items: center;
            }
        
            &__content-container {
                position: absolute;
                width: 400px;
                text-align: left;
                padding: rem-calc(30);
                z-index: 1;
            }

            &__subheading {
                color: $gray-600;
                line-height: 1.5;
                margin-bottom: rem-calc(20);
            }
        
            &__media {
                max-width: 1024px;
                margin-left: 150px;
                width: calc(100% - 150px);
                min-height: 350px;
            }
        }
    }

    @include media-breakpoint-up(lg) {
        .c-hero-card {
            &__content-container {
                width: 550px;
                padding: 48px 48px 36px;
            }
        
            &__subheading {
                color: $gray-600;
                margin-bottom: 24px;
            }
        
            &__media {
                margin-left: 250px;
                width: calc(100% - 250px);
                min-height: 500px;
            }
        }
    }
</style>
