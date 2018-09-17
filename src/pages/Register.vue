<template>
    <div class="p-register l-form-page">
        <div class="container">
            <div class="l-form-page__form">
                <h1 class="h3 mb-4">Register</h1>

                <form-messages :messages="serverMessages"></form-messages>

                <form id="register-form" @submit.prevent="processForm" novalidate>
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

                    <div class="form-group mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" 
                               class="form-control" 
                               id="password" 
                               name="password" 
                               placeholder="password" 
                               :class="{ 'is-invalid' : errors.has('password') }"
                               v-validate="'required'" 
                               v-model="password"
                               ref="password"
                               aria-describedby="password-errors">

                        <field-feedback :id="'password-errors'" :vee-errors="errors" :field-name="'password'"></field-feedback>
                    </div>

                    <div class="form-group mb-4">
                        <label for="confirm-password" class="form-label">Confirm Password</label>
                        <input type="password" 
                               class="form-control" 
                               id="confirm-password" 
                               name="confirm-password" 
                               placeholder="confirm password" 
                               :class="{ 'is-invalid' : errors.has('confirm-password') }"
                               v-validate="'required|confirmed:password'" 
                               v-model="confirmPassword"
                               aria-describedby="confirm-password-errors">

                        <field-feedback :id="'confirm-password-errors'" :vee-errors="errors" :field-name="'confirm-password'"></field-feedback>
                    </div>

                    <div class="form-group">
                        <form-submit :is-processing="isProcessing">Register</form-submit>
                    </div>
                </form>
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
                username: null,
                password: null,
                confirmPassword: null,
                isProcessing: false
            };
        },
        methods: {
            afterProcessForm() {
                this.register().catch(error => {
                    setTimeout(() => {
                        this.isProcessing = false;
                        this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                    }, 500);
                });
            },
            async register() {
                this.isProcessing = true;

                await this.$store.dispatch('user/register', {
                    username: this.username, 
                    password: this.password
                });

                setTimeout(() => {
                    this.isProcessing = false;
                    this.$router.push({ name: 'confirm-account' });
                }, 500);
            }
        }
    };
</script>
