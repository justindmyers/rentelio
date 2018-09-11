<template>
    <div class="p-message">
        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <h1 class="h3">Message Detail</h1>

                    <div v-if="message">
                        <dl>
                            <dt>Date:</dt>
                            <dd>{{ message.dateSent }}</dd>
                        </dl>

                        <dl>
                            <dt>From: </dt>
                            <dd>{{ message.sender }}</dd>
                        </dl>

                        <dl>
                            <dt>{{ message.title }}: </dt>
                            <dd>{{ message.text }}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
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
