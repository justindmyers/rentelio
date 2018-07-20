<template>
    <div class="container">
        <BackButton></BackButton>

        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">Make Payment</h1>

            <form action="/charge" method="post" id="payment-form">
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

                <div class="input-group mb-4">
                    <label for="card-element">
                        Credit or debit card
                    </label>

                    <div id="card-element">
                        <!-- A Stripe Element will be inserted here. -->
                    </div>

                    <!-- Used to display form errors. -->
                    <div id="card-errors" role="alert"></div>
                </div>

                <button class="btn btn-primary btn-lg">Submit Payment</button>
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
        },
        mounted() {
            // eslint-disable-next-line
            var stripe = Stripe('pk_RXlPPZuiuI94OtAc3HKb6BCxdjH23');

            // Create an instance of Elements.
            var elements = stripe.elements();

            // Custom styling can be passed to options when creating an Element.
            // (Note that this demo uses a wider set of styles than the guide below.)
            var style = {
                base: {
                    color: '#32325d',
                    lineHeight: '24px',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            };

            // Create an instance of the card Element.
            var card = elements.create('card', {style: style});

            // Add an instance of the card Element into the `card-element` <div>.
            card.mount('#card-element');

            // Handle real-time validation errors from the card Element.
            card.addEventListener('change', function (event) {
                var displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                } else {
                    displayError.textContent = '';
                }
            });

            // Handle form submission.
            var form = document.getElementById('payment-form');

            form.addEventListener('submit', function (event) {
                event.preventDefault();

                stripe.createToken(card).then(function (result) {
                    if (result.error) {
                        // Inform the user if there was an error.
                        var errorElement = document.getElementById('card-errors');
                        errorElement.textContent = result.error.message;
                    } else {
                        // Send the token to your server.
                        stripeTokenHandler(result.token);
                    }
                });
            });

            function stripeTokenHandler(token) {
                // Insert the token ID into the form so it gets submitted to the server
                var form = document.getElementById('payment-form');
                var hiddenInput = document.createElement('input');

                hiddenInput.setAttribute('type', 'hidden');
                hiddenInput.setAttribute('name', 'stripeToken');
                hiddenInput.setAttribute('value', token.id);
                form.appendChild(hiddenInput);

                // Submit the form
                form.submit();
            }
        }
    };
</script>

<style lang="scss" scoped>
    /**
    * The CSS shown here will not be introduced in the Quickstart guide, but shows
    * how you can use CSS to style your Element's container.
    */

    .StripeElement {
        padding: 12px 15px;
        border-radius: 4px;
        border: 1px solid #ced4da;
        box-shadow: 0 1px 3px 0 #e6ebf1;
        transition: box-shadow 150ms ease;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
</style>
