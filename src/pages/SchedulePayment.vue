<template>
    <div class="container">
        <BackButton></BackButton>

        <div class="l-dashboard__section">
            <h1 class="h3">Schedule Payment</h1>
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