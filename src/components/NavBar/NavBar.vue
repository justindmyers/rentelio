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
                        <li class="c-icon-nav__item">
                            <navbar-user-toggle></navbar-user-toggle>
                        </li>

                        <li class="c-icon-nav__item d-block d-sm-none">
                            <button type="button" class="c-nav-toggle" v-b-modal="'main-nav'">
                                <span class="sr-only">Toggle navigation</span>
                                <img class="c-nav-toggle__open-img" src="@/assets/menu-open.svg" />
                                <img class="c-nav-toggle__close-img" src="@/assets/menu-close.svg" />
                            </button>

                            <navbar-modal></navbar-modal>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import bCollapse from 'bootstrap-vue/es/components/collapse/collapse';
    import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
    import InlineSiteSearch from '../InlineSiteSearch/InlineSiteSearch';

    import NavbarModal from './NavbarModal';
    import NavbarUserToggle from './NavbarUserToggle';

    export default {
        name: 'NavBar',
        components: {
            InlineSiteSearch,
            bCollapse,
            NavbarModal,
            NavbarUserToggle
        },
        directives: {
            'b-modal': bModalDirective
        }
    };
</script>
