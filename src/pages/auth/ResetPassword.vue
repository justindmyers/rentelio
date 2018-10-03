<template>
    <form-page page-class="p-reset-password" class="l-form-page--alternate" :show-background="false" :messages="serverMessages">
        <template slot="header">
            <h1 class="l-form-page__heading h2">Reset Your Password</h1>
            <p class="l-form-page__sub-heading">Create a new password for your Rentelio account.</p>
        </template>

        <template>
            <form id="register-form" @submit.prevent="processForm" novalidate>
                <div class="form-group mb-5">
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

                    <field-feedback inverse :id="'password-errors'" :vee-errors="errors" :field-name="'password'"></field-feedback>
                </div>

                <div class="form-group mb-5">
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

                    <field-feedback inverse :id="'confirm-password-errors'" :vee-errors="errors" :field-name="'confirm-password'"></field-feedback>
                </div>

                <form-submit :is-processing="isProcessing">Reset Password</form-submit>
            </form>
        </template>

        <template slot="background">
            <span class="h-placeholder-image h-placeholder-image--bg">
                <lazy-img placeholder="images/placeholder.gif" src="//placeimg.com/600/600/arch" alt="Hero image" />
                <span class="h-mask is-medium"></span>
            </span>
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
                password: null,
                confirmPassword: null,
                isProcessing: false
            };
        },
        methods: {
            afterProcessForm() {
                this.resetPassword().catch(error => {
                    setTimeout(() => {
                        this.isProcessing = false;
                        this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                    }, 500);
                });
            },
            async resetPassword() {
                this.isProcessing = true;

                await this.$store.dispatch('user/resetPassword', {
                    code: this.$route.query.code,
                    username: this.username, 
                    password: this.password
                });

                setTimeout(() => {
                    this.isProcessing = false;
                    this.$router.push({ 
                        name: 'login', 
                        params: { 
                            message: new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.SUCCESS, 'Password successfully changed. Please login')
                        }
                    });
                }, 500);
            }
        }
    };
</script>
