<template>
    <div>
        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <h1 class="h3">Message Detail</h1>

                    <div>
                        {{ message.title }}
                        {{ message.text }}
                        {{ message.sentAt }}

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
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
