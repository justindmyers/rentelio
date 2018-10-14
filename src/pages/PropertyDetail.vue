<template>
    <div class="p-property container">
        <div class="l-dashboard__section">
            <h1 class="h3">{{ listing.formattedAddress }}</h1>
            <p>{{ listing.formattedAddress2 }}</p>
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
    export default {
        name: 'PropertyDetail',
        computed: {
            lease() {
                return this.$store.getters['user/currentLease'];
            },
            listing() {
                return this.lease.listing.toViewModel;
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
