<template>
    <button class="c-site-search-modal__link" v-b-modal="modalId">
        <img :src="searchIcon" alt=""><span class="sr-only">Search</span>
    </button>
</template>

<script>
    import idMixin from 'bootstrap-vue/src/mixins/id';

    export default {
        name: 'InlineSiteSearch',
        mixins: [idMixin],
        data() {
            return {
                inputId: this.safeId() + '__search',
                modalId: this.safeId() + '__modal'
            };
        },
        props: {
            formAction: {
                type: String,
                required: true
            },
            searchLabel: {
                type: String,
                default: 'Search'
            },
            placeholder: {
                type: String,
                default: 'Search'
            },
            inputName: {
                type: String,
                default: 'query'
            },
            searchIcon: {
                type: String,
                default: '/assets/glyphs/search.svg'
            }
        },
        methods: {
            onShown() {
                this.$nextTick(() => {
                    this.$nextTick(() => {
                        this.$refs.search.focus();
                    });
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-site-search-modal {
        .modal-backdrop {
            background: rgb(44, 51, 57);

            &.show {
                opacity: 0.8;
            }
        }

        .modal-dialog {
            margin: 0;
            width: 100%;
            max-width: none;
        }

        .modal-header {
            border: none;
            padding: 0;
        }

        .modal-body {
            width: 770px;
            max-width: 90%;
            margin: 0 auto;
            position: static;
        }

        .modal-content {
            padding: rem-calc(130) 0 rem-calc(70);
            border: none;
            border-radius: 0;
            background: transparent;
        }

        &__heading {
            font-weight: 400;
            margin-bottom: rem-calc(10);
            color: $white;
        }

        .close {
            color: $white;
            position: absolute;
            top: 20px;
            right: 20px;
            margin: 0;
            opacity: 1;
            font-size: 36px;
            font-weight: 300;
            padding: 0;
            line-height: 1;
            width: 50px;
            height: 50px;
            background: transparent;
            border: none;
            text-shadow: none;

            &:hover, &:active, &:focus {
                background: transparent;
                border: none; 
            }
        }

        &__link {
            @include reset-button();
        }

        &__search {
            position: relative;

            label {
                display: flex;
                align-items: center;
            }

            input {
                flex: 1;
                border: none;
                padding: 1rem;
                font-weight: 500;
                border-radius: 0px;
                font-size: 16px;
            }

            img {
                width: 24px;
                height: 24px;
            }
        }

        &__search-submit {
            @include reset-button();

            position: absolute;
            right: 0rem;
            height: 100%;
            background: $primary-color;
            color: $white;
            padding: 0 3rem;
            font-size: 1.2rem;
        }

        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: $light-grey;
            font-size: 1rem;
            font-style: italic;
        }

        ::-moz-placeholder { /* Firefox 19+ */
            color: pink;
        }

        :-ms-input-placeholder { /* IE 10+ */
            color: pink;
        }

        :-moz-placeholder { /* Firefox 18- */
            color: pink;
        }

        .c-search-modal-close{
            position: absolute;
            top: 1rem;
            right: 3rem;
            font-size: 2rem;
            background: none;
            border: none;

            i{
                color: #ffffff;
            }
        }
    }

    @include media-breakpoint-down(md) {
        .c-site-search-modal {
            .modal{
                background: rgba(44, 51, 57, 0.8); 
            }
        
            .modal-backdrop {
                background-color: none;
            }
        
            .modal-dialog {
                margin: 0;
                width: 100%;
                max-width: none;
            }
        
            .modal-header {
                border: none;
                padding: 0;
            }
        
            .modal-body {
                width: 770px;
                max-width: 90%;
                margin: 0 auto;
                position: static;
            }
        
            .modal-content {
                padding: rem-calc(130) 0 rem-calc(70);
                border: none;
                border-radius: none;
                background: transparent;
            }

            &__search {
                position: relative;
        
                label {
                    display: block;
                    align-items: center;
                }
        
                input {
                    width: 100%;
                }
        
                button {
                    width: 100%;
                    margin: 1rem 0 0 0;
                }
        
                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
</style>
