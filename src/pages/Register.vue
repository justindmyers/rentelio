<template>
    <div class="p-register l-dashboard">
        <div class="container">
            <div class="l-dashboard__section">
                <h1 class="h3 mb-4">Register</h1>

                <ul class="alert alert-danger" v-show="serverErrors.length" role="alert">
                    <li v-for="error in serverErrors" :key="error.message">
                        {{ error.message }}
                    </li>
                </ul>

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

                        <div class="invalid-feedback" id="email-errors" aria-live="assertive">
                            <span>{{ errors.first('email') }}</span>
                        </div>
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
                               aria-describedby="password-errors">

                        <div class="invalid-feedback" id="password-errors" aria-live="assertive">
                            <span>{{ errors.first('password') }}</span>
                        </div>
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

                        <div class="invalid-feedback" id="confirm-password-errors" aria-live="assertive">
                            <span>{{ errors.first('confirm-password') }}</span>
                        </div>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary btn-lg btn-block">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: null,
                password: null,
                confirmPassword: null,
                serverErrors: []
            };
        },
        methods: {
            async processForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.serverErrors = [];

                        this.register().catch(error => {
                            this.serverErrors.push({
                                message: error.message || error
                            });
                        });

                        return;
                    }
                });
            },
            async register() {
                await this.$store.dispatch('user/register', {
                    username: this.username, 
                    password: this.password
                });

                this.$router.push({ name: 'confirm-account' });
            }
        }
    };
</script>
