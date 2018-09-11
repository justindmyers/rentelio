<!--
    to test:
       c-fifty
       props
         opposite
         fontColor
         background
         end
-->
<template>
    <div class="c-fifty" :class="{ 'is-opposite' : opposite }" :style="{ color: fontColor }">
        <span class="c-fifty__background" :style="{ background: background }"></span>

        <div class="container">
            <div class="row no-gutters">
                <template v-if="opposite">
                    <div class="col-6">
                        <div class="c-fifty__text">
                            <slot></slot>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="c-fifty__image">
                            <slot name="image"></slot>
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div class="col-6">
                        <div class="c-fifty__image">
                            <slot name="image"></slot>
                        </div>
                    </div>

                    <div class="col-6">
                        <div class="c-fifty__text">
                            <slot></slot>
                        </div>
                    </div>
                </template>
            </div>

            <template v-if="end">
                <span class="c-fifty__end"></span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FiftyFiftyImage',
        props: {
            background: {
                type: String
            },
            fontColor: {
                type: String
            },
            opposite: {
                type: Boolean,
                default: false
            },
            end: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-fifty {
        $this: &;

        position: relative;
        padding: 0 0 15px;
        color: $white;

        &__background {
            background: linear-gradient(212.32deg, rgba(100,185,175,1) 0%, rgba(153,210,203,1) 100%);
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            clip-path: polygon(0px 30px, 100% 0%, 100% 100%, 0 100%);
            margin-top: -30px;
        }

        &__text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            margin-top: -20px;
        }

        &__image{
            position: relative;
            top: -60px;
            z-index: 1;
        }

        &__end {
            display: block;
            height: 56px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(227, 227, 227,1);
            clip-path: polygon(0 0, 100% 0, 100% 30px, 0 100%);
            border-top: 1px solid #fff;

            &:after {
                content: '';
                display: block;
                height: 56px;
                position: absolute;
                bottom: 1px;
                left: 0;
                right: 0;
                background: #fff;
                clip-path: polygon(0 0, 100% 0, 100% 30px, 0 100%);
            }
        }

        .btn {
            max-width: 200px;
            white-space: normal;
        }

        &.is-opposite {
            padding-bottom: 0;

             /deep/ #{$this}__background {
                clip-path: polygon(0 0, 100% 30px, 100% 100%, 0 100%);
            }
        }

        a {
            font-weight: 600;
        }
    }

    @include media-breakpoint-down(md) {
        .c-fifty{
            &__text {
                padding: rem-calc(22px);
            }
        }
    }
</style>
