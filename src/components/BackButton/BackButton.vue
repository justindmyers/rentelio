<template>
    <button class="btn--back" v-on:click="goBack"><i class="fas fa-arrow-left"></i> Back</button>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    };
</script>
