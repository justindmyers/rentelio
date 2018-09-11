<template>
    <div class="c-fifty">
        <div class="row no-gutters">
            <div class="col-lg-6">
                <div class="c-fifty-image">
                    <div class="c-fifty-image-wrapper h-placeholder-image h-placeholder-image--16-9">
                        <slot name="image"></slot>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="c-fifty-text right">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FiftyFiftyImage'
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-fifty{
        .c-fifty-text {
            display: flex;
            flex-direction: column;
            padding: 5rem;
            justify-content: center;
            height: 100%;

            &.right{
                align-items: flex-end;
                text-align: right;

                .h-line-mark{
                    position: relative;
                    
                    &:before{
                        position: absolute;
                        right: 0;
                        top: -5px;
                    }
                }
            }

            &.center{
                align-items: center;
                text-align: center;

                .h-line-mark:before{
                    margin: 0px auto 5px auto;
                }
            }
        }

        .c-fifty-image{
            height: 100%;
        }

        .c-fifty-image-wrapper{
            height: 100%;
        }

        .btn{
            max-width: 200px;
            white-space: normal;
        }
    }

    @include media-breakpoint-down(md) {
        .c-fifty{
            .c-fifty-text {
                padding: 2rem;
            }
        }
    }
</style>
