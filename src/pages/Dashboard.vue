<template>
    <div>
        <Hero>
            <template slot="image">
                <img src="assets/placeholder.gif" v-lazy-img="'/images/property.png'" alt="Hero image" />

                <span class="h-mask is-medium"></span>
            </template>
        </Hero>

        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <h1 class="h3">592 Highland Avenue</h1>
                    <p>Los Angeles, CA 90019</p>
                </div>

                <div class="l-dashboard__section">
                    <nav>
                        <ul class="c-icon-nav nav">
                            <li><i class="fas fa-info"></i> Property<br/> Info</li>
                            <li><i class="fas fa-wrench"></i> Request<br/> Support</li>
                            <li><i class="far fa-credit-card"></i> Make a<br/> Payment</li>
                            <li><i class="fas fa-user"></i> Your<br/> Profile</li>
                        </ul>
                    </nav>
                </div>

                <div class="l-dashboard__section">
                    <Listing type="Messages" title-key="title" date-key="sentAt" :list="messages" view-all-path="dashboard/messages" :show-view-all="true"></Listing>
                </div>

                <div class="l-dashboard__section">
                    <Listing type="Payments" title-key="title" date-key="date" :list="payments" view-all-path="dashboard/payments" :show-view-all="true"></Listing>
                </div>
            </div>

            <ProfileCard>
                <template slot="image">
                    <img src="//placehold.it/100/100" />
                </template>

                <h3 class="mb-1">Trevor Smith</h3>
                <p>Landlord</p>

                <p class="mb-1">Mobile: <a href="tel:1-310-431-0012">1-310-231-0012</a></p>
                <p class="mb-0">Email: <a href="mailto:tsmith@email.com">tsmith@email.com</a></p>
            </ProfileCard>
        </div>
    </div>
</template>

<script>
    import Hero from '../components/Hero/Hero.vue';
    import Listing from '../components/Listing/Listing.vue';
    import ProfileCard from '../components/ProfileCard/ProfileCard.vue';

    export default {
        name: 'app',
        components: {
            Hero,
            Listing,
            ProfileCard
        },
        computed: {
            payments() {
                return this.$store.getters['payments/list'];
            },
            messages() {
                return this.$store.getters['messages/list'];
            }
        },
        mounted() {
            this.$store.dispatch('payments/getAllPayments');
            this.$store.dispatch('messages/getAllMessages');
        },
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .l-dashboard {
        &__section {
            padding: rem-calc(30) 0 rem-calc(25);
            border-bottom: 1px solid #e3e3e3;

            & > *:last-child {
                margin-bottom: 0;
            }
        }
    }

    .c-icon-nav {
        display: flex;
        justify-content: space-between;
        padding: 0 rem-calc(10);

        & > li {
            display: flex;
            flex-direction: column;
            text-align: center;
            line-height: 1.3;
            color: #535D68;
            font-size: rem-calc(14);

            i {
                color: #535D68;
                font-size: rem-calc(35);
                margin-bottom: rem-calc(10);
            }
        }
    }
</style>
