<template>
    <form-page title="Log in to your account" page-class="p-login" :messages="serverMessages">
        <template>
            <form @submit.prevent="processForm" novalidate>
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

                    <field-feedback inverse :id="'email-errors'" :field-name="'email'"></field-feedback>
                </div>

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
                        aria-describedby="password-errors">

                    <field-feedback inverse :id="'password-errors'" :field-name="'password'"></field-feedback>
                </div>

                <div class="form-group">
                    <form-submit :is-processing="isProcessing">Log In</form-submit>
                </div>
            </form>
        </template>

        <template slot="background">
            <span class="h-placeholder-image h-placeholder-image--bg">
                <lazy-img placeholder="images/placeholder.gif" src="//placeimg.com/600/600/arch" alt="Hero image" />
                <span class="h-mask is-medium"></span>
            </span>
        </template>

        <template slot="after">
            <router-link :to="{ name: 'forgot-password' }" class="btn btn-block btn-link mb-3">Need help logging in?</router-link>
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
                username: null,
                password: null,
                isProcessing: false
            };
        },
        methods: {
            afterProcessForm() {
                this.login().catch(error => {
                    setTimeout(() => {
                        this.isProcessing = false;
                        this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                    }, 500);
                });
            },
            async login() {
                this.isProcessing = true;

                await this.$store.dispatch('user/login', {
                    username: this.username, 
                    password: this.password
                });

                this.isProcessing = false;

                if(this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect);
                } else {
                    this.$router.push('/dashboard');
                }
            }
        }
    };
</script>