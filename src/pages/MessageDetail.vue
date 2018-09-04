<template>
    <div>
        <div class="l-dashboard">
            <div class="container">
                <BackButton></BackButton>

                <div class="l-dashboard__section">
                    <h1 class="h3">Message Detail</h1>

                    <div v-if="message">
                        {{ message.title }}
                        {{ message.text }}
                        {{ message.sender }}
                        {{ message.dateSent }}
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
                return this.$store.getters['messages/getMessageById'](this.id);
            }
        },
        mounted() {
            this.$store.dispatch('messages/getMessageById', this.id);
        }
    };
</script>
