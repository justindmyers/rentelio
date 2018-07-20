<template>
    <div>
        <div class="l-dashboard">
            <div class="container">
                <BackButton></BackButton>

                <div class="l-dashboard__section">
                    <h1 class="h3">Payment Detail</h1>

                    <div>
                        {{ message.title }}
                        {{ message.amount }}
                        {{ message.date }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton/BackButton.vue';

    export default {
        props: ['id'],
        components: {
            BackButton
        },
        computed: {
            message() {
                return this.$store.getters['payments/getPaymentById'](this.id);
            }
        },
        mounted() {
            this.$store.dispatch('payments/getPaymentById', this.id);
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
