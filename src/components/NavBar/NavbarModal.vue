<template>
    <Modal id="main-nav" class="c-main-nav__modal" hide-footer lazy>
        <template slot="modal-header">
            <h2 class="sr-only">Navigation</h2>
        </template>

        <b-btn-close class="c-main-nav__close-button" @click="closeModal()">
            <img src="@/assets/menu-close.svg" />
        </b-btn-close>

        <nav class="c-main-nav" v-if="isLoggedIn">
            <ul class="c-main-nav__list">
                <template v-if="user.isTenant">
                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-dashboard'}">Dashboard</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-property-detail'}">Property Details</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-request-support'}">Request Support</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-schedule-payment'}">Schedule a Payment</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-profile'}">User Profile</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-messages'}">Messages</router-link>
                    </li>

                    <li class="c-main-nav__item">
                        <router-link class="c-main-nav__link" :to="{ name: 'tenant-payments'}">Payment History</router-link>
                    </li>
                </template>

                <template v-if="user.isLandlord">
                    <!-- isLandlord -->
                </template>

            </ul>

            <button class="btn btn-link" type="button" @click="logout">Logout</button>
        </nav>

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
                <router-link :to="{ name: 'register'}" class="btn btn-block btn-primary btn-lg btn-round mb-4">Sign Up</router-link>
                <router-link :to="{ name: 'login'}">Log in to your account</router-link>
            </div>
        </nav>
    </Modal>
</template>

<script>
    import bBtnClose from 'bootstrap-vue/es/components/button/button-close';
    import Modal from '../modal';
    import { FEEDBACK_MESSAGE_PRIORITY, FeedbackMessage } from '@/mixins/formPage';

    export default {
        name: 'NavBarModal',
        components: {
            Modal,
            bBtnClose
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
            user() {
                return this.$store.getters['user/currentUser'];
            },
            isLoggedIn() {
                return this.$store.getters['user/isLoggedIn'];
            }
        },
        watch:{
            $route(){
                this.closeModal();
            }
        }
    }
</script>
