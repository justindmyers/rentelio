<template>
    <div class="container">
        <BackButton></BackButton>

        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">User Profile</h1>

            <form>
                <div class="input-group mb-4">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" name="name" value="Shelly Williams" />
                </div>

                <div class="input-group mb-4">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" name="email" value="swilliams@email.com" />
                </div>

                <div class="input-group mb-4">
                    <label for="phone">Phone</label>
                    <input type="phone" id="phone" class="form-control" name="phone" value="310-283-9912" />
                </div>

                <div class="input-group mb-4">
                    <label for="info">Have more information?</label>
                    <textarea id="info" class="form-control" name="info" placeholder="up to 280 characters" />
                </div>

                <div class="input-group">
                    <button class="btn btn-large">Save info</button>
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
        }
    };
</script>