<template>
    <div class="l-dashboard">
        <div class="container">
            <div class="l-dashboard__section">
                <h1 class="h3 mb-4">Login</h1>

                <form id="login-form" @submit.prevent="processForm">
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="user@rentelio.com" v-model="username">
                    </div>

                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="password" v-model="password">
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary btn-lg btn-block">Login</button>
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
                username: '',
                password: ''
            };
        },
        methods: {
            async processForm() {
                this.login().catch(error => {
                    // eslint-disable-next-line
                    console.log(error);
                });
            },
            async login() {
                const response = await this.$store.dispatch('user/login', {
                    username: this.username, 
                    password: this.password
                });

                if(this.$route.query.redirect) {
                    this.$router.push(this.$route.query.redirect);
                } else {
                    this.$router.push('/dashboard');
                }
            }
        }
    };
</script>
