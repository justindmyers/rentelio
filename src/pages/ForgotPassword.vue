<template>
    <div class="p-forgot-password l-form-page">
        <div class="container">
            <div class="l-form-page__form">
                <h1 class="h3 mb-4">Forgot Password</h1>

                <form-messages :messages="serverMessages"></form-messages>

                <transition name="fade">
                    <form id="forgot-password-form" @submit.prevent="processForm" novalidate v-if="!isSuccessful">
                        <div class="form-group mb-4">
                            <label for="email" class="form-label">Email</label>

                            <input type="email" 
                                class="form-control" 
                                id="email" 
                                required 
                                name="email" 
                                placeholder="user@rentelio.com"
                                :class="{ 'is-invalid' : errors.has('email') }"
                                v-validate="'required|email'" 
                                v-model="username"
                                aria-describedby="email-errors">

                            <field-feedback :id="'email-errors'" :vee-errors="errors" :field-name="'email'"></field-feedback>
                        </div>

                        <div class="form-group">
                            <form-submit :is-processing="isProcessing">Submit</form-submit>
                        </div>
                    </form>
                </transition>
            </div>
        </div>
    </div>
</template>


<script>
    import { formPageMixin, FeedbackMessage, FEEDBACK_MESSAGE_PRIORITY } from '@/mixins/formPage';

    export default {
        mixins: [formPageMixin],
        data() {
            return {
                isSuccessful: false,
                username: null
            };
        },
        methods: {
            afterProcessForm() {
                this.forgotPassword().catch(error => {
                    setTimeout(() => {
                        this.isProcessing = false;
                        this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                    }, 500);
                });
            },
            async forgotPassword() {
                this.isProcessing = true;

                await this.$store.dispatch('user/forgotPassword', {
                    username: this.username
                });

                setTimeout(() => {
                    this.isProcessing = false;
                    this.isSuccessful = true;

                    // Strapi doesn't return anything if successful so set our own message
                    this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.INFO, 'Please check your email for instructions on how to reset your password.'))
                }, 500);
            }
        }
    };
</script>
