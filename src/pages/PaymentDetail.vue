<template>
    <div class="p-payment">
        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <h1 class="h3">Payment Detail</h1>

                    <div v-if="payment">
                        <dl>
                            <dt>Date:</dt>
                            <dd>{{ payment.paymentDate }}</dd>
                        </dl>

                        <dl>
                            <dt>From: </dt>
                            <dd>{{ payment.sender }}</dd>
                        </dl>

                        <dl>
                            <dt>To: </dt>
                            <dd>{{ payment.recipient }}</dd>
                        </dl>

                        <dl>
                            <dt>For: </dt>
                            <dd>{{ payment.description }}</dd>
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
            payment() {
                return this.$store.getters['entities/payment/query']()
                                  .where('id', this.id)
                                  .withAll()
                                  .get()
                                  .map(payment => payment.toViewModel)
                                  .pop();
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";
</style>
