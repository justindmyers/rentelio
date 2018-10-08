<template>
    <div class="p-messages l-dashboard">
        <div class="container">
            <div class="l-dashboard__section">
                <Listing type="Messages" title-key="title" date-key="dateSent" :list="messages" view-all-path="messages"></Listing>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '../components/Hero/Hero.vue';
    import Listing from '../components/Listing/Listing.vue';

    export default {
        name: 'app',
        components: {
            Hero,
            Listing
        },
        computed: {
            messages() {
                return this.$store.getters['entities/message/query']()
                                  .withAll()
                                  .get()
                                  .map(message => message.toViewModel);
            }
        }
    };
</script>
