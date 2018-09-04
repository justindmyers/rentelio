<template>
    <div class="container">
        <BackButton></BackButton>

        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">User Profile</h1>

            <form>
                <div class="input-group mb-4">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" name="name" :value="user.username" />
                </div>

                <div class="input-group mb-4">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" name="email" :value="user.email" />
                </div>

                <div class="input-group mb-4">
                    <label for="phone">Phone</label>
                    <input type="phone" id="phone" class="form-control" name="phone" :value="user.phone" />
                </div>

                <div class="input-group mb-4">
                    <label for="info">Have more information?</label>
                    <textarea id="info" class="form-control" name="info" placeholder="up to 280 characters" />
                </div>

                <div class="input-group">
                    <button class="btn btn-lg btn-primary btn-block">Save info</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton/BackButton.vue';

    export default {
        name: 'UserProfile',
        components: {
            BackButton
        },
        computed: {
            user() {
                return this.$store.getters['user/currentUser'];
            }
        }
    };
</script>