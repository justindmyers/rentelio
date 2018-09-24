<template>
    <form-page page-class="p-forgot-password" class="l-form-page--alternate"  :show-background="false" :messages="serverMessages">
        <template slot="header">
            <h1 class="l-form-page__heading h2">Request a password link</h1>
            <p class="l-form-page__sub-heading">Enter a valid email address to receive a link to reset your password.</p>
        </template>

        <template>
            <form id="forgot-password-form" @submit.prevent="processForm" novalidate v-if="!isSuccessful">
                <div class="form-group mb-4">
                    <label for="email" class="form-label">Account Email Address</label>

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

                    <field-feedback :id="'email-errors'" :field-name="'email'"></field-feedback>
                </div>

                <form-submit :is-processing="isProcessing">Submit</form-submit>
            </form>
        </template>
    </form-page>
</template>


<script>
    import FormPage from '@/components/Forms/FormPage';
    import lazyImg from '@/components/lazyImg';
    import { formPageMixin, FeedbackMessage, FEEDBACK_MESSAGE_PRIORITY } from '@/mixins/formPage';

    export default {
        mixins: [formPageMixin],
        components: {
            FormPage,
            lazyImg
        },
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
