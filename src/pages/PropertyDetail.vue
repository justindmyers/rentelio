<template>
    <div class="p-property container">
        <div class="l-dashboard__section">
            <h1 class="h3">{{ address }}</h1>
            <p>{{ address2 }}</p>
        </div>

        <div class="l-dashboard__section">
            <h2 class="h4 mb-3">Rental Information</h2>

            <div class="p-property__rental-info">
                <dl>
                    <dt>Term</dt>
                    <dd>{{ lease.term }}</dd>
                    
                    <dt>Lease Start</dt>
                    <dd>{{ lease.startDate }}</dd>
                    
                    <dt>Lease End</dt>
                    <dd>{{ lease.endDate }} </dd>

                    <dt>Rate</dt>
                    <dd>{{ lease.rate }}</dd>
                </dl>
            </div>
        </div>

        <div class="l-dashboard__section">
            <h2 class="h4 mb-3">Included Amenities</h2>

            <div class="p-property__amenities">
                {{ listing.amenities }}
            </div>
        </div>
    </div>
</template>

<script>
    import { formattedAddress, formattedAddress2 } from '@/utils/utils';

    export default {
        name: 'PropertyDetail',
        computed: {
            lease() {
                const currentUser = this.$store.getters['user/currentUser'];

                return this.$store.getters['entities/lease/query']()
                                  .where('tenant', currentUser.id)
                                  .withAll()
                                  .get()
                                  .map(lease => lease.toViewModel)
                                  .pop();
            },
            listing() {
                return this.$store.getters['entities/listing/query']()
                                  .where('id', this.lease.listing)
                                  .withAll()
                                  .get()
                                  .map(listing => listing.toViewModel)
                                  .pop();
            },
            address() {
                return formattedAddress(this.listing.address, this.listing.address2);
            },
            address2() {
                return formattedAddress2(this.listing.city, this.listing.state, this.listing.zipCode);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    dt {
        float: left;
        clear: left;
        text-align: right;
        font-weight: bold;
        margin-right: rem-calc(6);
    }

    dt::after {
        content: ':';
    }

    ul {
        @include reset-list();

        li {
            margin-bottom: rem-calc(8);
        }
    }
</style>
