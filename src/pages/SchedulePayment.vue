<template>
    <div class="container">
        <BackButton></BackButton>

        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">Make Payment</h1>

            <form>
                <div class="d-flex justify-content-between mb-4">
                    <div>
                        From <br /> Shelly via Venmo
                    </div>

                    <div>
                        To <br /> Trevor via Venmo
                    </div>
                </div>

                <div class="input-group mb-4">
                    <label for="amount">Amount</label>
                    <input type="text" id="amount" class="form-control" name="amount" />
                </div>

                <div class="input-group mb-4">
                    <label for="payment-date">Payment date</label>
                    <input type="text" id="payment-date" class="form-control" name="payment-date" />
                </div>

                <div class="input-group">
                    <button class="btn btn-large">Make Payment</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import BackButton from '@/components/BackButton/BackButton.vue';

    export default {
        name: 'SchedulePayment',
        components: {
            BackButton
        }
    };
</script>