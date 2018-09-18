<template>
    <header class="l-header">
        <div class="l-header__inner container container-fluid">
            <div class="l-header__brand">
                <a class="c-logo" href="/">
                    <img class="c-logo__img" src="@/assets/logo.svg" alt="Logo">
                </a>
            </div>

            <div class="l-header__main">
                <b-collapse class="c-main-nav__wrapper" id="main-nav">
                    <nav class="c-main-nav">
                        <ul class="c-main-nav__list">
                            <li class="c-main-nav__item">
                                <router-link class="c-main-nav__link" to="/">Home</router-link>
                            </li>

                            <li class="c-main-nav__item">
                                <router-link class="c-main-nav__link" to="/about">About</router-link>
                            </li>
                        </ul>
                    </nav>
                </b-collapse>
            </div>

            <div class="l-header__utility">
                <nav class="c-icon-nav">
                    <ul class="c-icon-nav__list">
                        <li class="c-icon-nav__item" v-if="!isLoggedIn">
                            <InlineSiteSearch form-action="#" input-name="query" :search-icon="require(`@/assets/search.svg`)" placeholder="Placeholder">
                                <button class="c-icon-nav__link">
                                    <img src="@/assets/search.svg" alt="Search">
                                </button>
                            </InlineSiteSearch>
                        </li>

                        <li class="c-icon-nav__item d-block d-sm-none">
                            <button type="button" class="c-nav-toggle" v-b-modal="'main-nav'">
                                <span class="sr-only">Toggle navigation</span>
                                <img class="c-nav-toggle__open-img" src="@/assets/menu-open.svg" />
                                <img class="c-nav-toggle__close-img" src="@/assets/menu-close.svg" />
                            </button>

                            <Modal id="main-nav" class="c-main-nav__modal" hide-footer lazy>
                                <template slot="modal-header">
                                    <h2 class="sr-only">Search</h2>
                                </template>

                                <b-btn-close class="c-main-nav__close-button" @click="closeModal()">
                                    <img src="@/assets/menu-close.svg" />
                                </b-btn-close>

                                <div v-if="isLoggedIn">
                                    Logged In Menu 
                                    
                                    <button type="button" @click="logout">Logout</button>
                                </div>

                                <nav class="c-main-nav" v-if="!isLoggedIn">
                                    <ul class="c-main-nav__list">
                                        <li class="c-main-nav__item">
                                            <router-link class="c-main-nav__link" to="/">Who is it for?</router-link>
                                        </li>

                                        <li class="c-main-nav__item">
                                            <router-link class="c-main-nav__link" to="/about">How does it work?</router-link>
                                        </li>

                                        <li class="c-main-nav__item">
                                            <router-link class="c-main-nav__link" to="/about">How much does it cost?</router-link>
                                        </li>

                                        <li class="c-main-nav__item">
                                            <router-link class="c-main-nav__link" to="/about">Request a demo?</router-link>
                                        </li>
                                    </ul>

                                    <div class="c-main-nav__actions">
                                        <router-link :to="{ name: 'register'}" class="btn btn-block btn-primary btn-lg btn-round mb-4" @click.native="$root.$emit('bv::hide::modal', 'main-nav')">Sign Up</router-link>
                                        <router-link :to="{ name: 'login'}" @click.native="$root.$emit('bv::hide::modal', 'main-nav')">Log in to your account</router-link>
                                    </div>
                                </nav>
                            </Modal>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
    import bBtnClose from 'bootstrap-vue/es/components/button/button-close';
    import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
    import InlineSiteSearch from '../InlineSiteSearch/InlineSiteSearch';
    import Modal from '../modal';

    import { FEEDBACK_MESSAGE_PRIORITY, FeedbackMessage } from '@/mixins/formPage';

    export default {
        name: 'NavBar',
        components: {
            InlineSiteSearch,
            Modal,
            bCollapse,
            bBtnClose
        },
        directives: {
            'b-modal': bModalDirective
        },
        methods: {
            async logout() {
                await this.$store.dispatch('user/logout');

                this.closeModal();

                this.$router.push({ 
                    name: 'login', 
                    params: {
                        message: new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.INFO, 'You have been logged out successfully')
                    }
                });
            },
            closeModal() {
                this.$root.$emit('bv::hide::modal', 'main-nav');
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters['user/isLoggedIn'];
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-logo {
        display: block;

        &__img {
            width: 135px;
            max-width: 100%;
        }
    }

    .l-header {
        position: sticky;
        top: 0;
        background-color: #fff;
        z-index: 1001;
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);

        &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        // Bootstrap override
        .collapsing {
            display: block;
        }
    }

    @include media-breakpoint-down(sm) {
        .l-header {
            &__inner {
                padding: rem-calc(15);
            }

            &__brand {
                max-width: 30%;
                min-width: 100px;
            }

            &__main {
                position: absolute;
                top: 100%;
                right: 0;
                left: 0;
            }
        }
    }

    @include media-breakpoint-up(sm) {
        .l-header {
            &__inner {
                height: 75px;
            }
        }
    }

    @include media-breakpoint-only(sm) {
        .l-header {
            &__inner {
                height: 55px;
            }
        }
    }

    .c-main-nav {
        display: flex; 
        justify-content: space-between;
        flex-direction: column;
        width: 100%;

        &__list {
            @include reset-list();
        }

        &__link {
            color: #000;
            padding: 10px;
            background: transparent;
            border: none;
            line-height: 1;

            &:hover,
            &:active,
            &:focus,
            [aria-expanded=true] {
                text-decoration: none;
                color: #000;
            }

            &.active {
                background: #f1f1f1;
                box-shadow: inset -1px 0 5px 2px #E6E6E6;
            }

            .dropdown-arrow {
                padding: 0 0 0 rem-calc(10);
                color: $gray-200;

                &:before {
                    display: block;
                    transition: .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) all;
                }
            }

            &[aria-expanded=true] .dropdown-arrow:before {
                transform: rotate(180deg) translateY(2px);
            }
        }

        &__close-button {
            color: $black;
            opacity: 1;
            position: absolute;
            top: 15px;
            right: 15px;

            img {
                width: 30px;
            }
        }

        &__actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        &__modal {
            /deep/ .modal-backdrop {
                background-color: transparent;
            }

            /deep/ .modal-header {
                padding: 0;
            }

            /deep/ .modal-content {
                background: transparent;
                border: none;
            }

            /deep/ .modal-dialog, /deep/ .modal-content {
                margin: 0;
                height: 100%;
            }

            /deep/ .modal-body {
                display: flex;
                padding: 30px;
                background: rgba(255, 255, 255, .95);
            }
        }
    }

    @include media-breakpoint-down(xs) {
        .c-main-nav {
            padding-top: 70px;

            &__link {
                display: flex;
                justify-content: space-between;
                width: 100%;
                font-size: rem-calc(24);
                padding: rem-calc(13) 0;
            }
        }
    }

    @include media-breakpoint-only(sm) {
        .c-main-nav {
            &__list {
                border-bottom: 1px solid #e4e4e4;
            }

            &__item {
                border-bottom: none;
            }
        }
    }

    @include media-breakpoint-up(sm) {
        .c-main-nav {
            &__link {
                display: block;
                padding: rem-calc(20) rem-calc(30) rem-calc(15);
                margin: 0;
                border: none;
                background: transparent;

                &:hover,
                &:active,
                &:focus {
                    color: #000;
                }
            }

            &__list {
                display: flex;
                width: 100%;
                padding: 0;
            }

            &__item {
                display: flex;
                align-items: center;
            }
        }

        // Don't allow collapsing on desktop
        .c-main-nav__wrapper.collapse {
            display: block !important;
        }
    }

    /* ----------------------------------------------------------------------------
    *
    * Prime Nav Toggle
    *
    * ---------------------------------------------------------------------------- */
    .c-nav-toggle {
        $this: &;

        @include reset-button();
        line-height: 0;
        vertical-align: middle;

        &__close-img {
            display: none;
        }

        &[aria-expanded=true] {
            #{$this}__close-img {
                display: block;
            }

            #{$this}__open-img {
                display: none;
            }
        }

        img {
            width: 40px;
        }
    }

    @media (max-width: 769px) {
        .h-hide-bg#{\@}xs {
            background-image: none !important;
        }
    }

    .c-icon-nav {
        &__link {
            @include reset-button();

            color: #949494;

            &:hover,
            &:active,
            &:focus {
                color: #949494;
            }

            img {
                max-width: 20px;
            }
        }

        &__list {
            display: flex;
            align-items: center;

            @include reset-list();
        }

        &__item {
            margin: 0 0 0 rem-calc(20);
            padding: 0;
        }
    }
</style>
