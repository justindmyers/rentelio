<template>
    <div class="p-property container">
        <div class="l-dashboard__section">
            <h1 class="h3">592 Highland Avenue</h1>
            <p>Los Angeles, CA 90019</p>
        </div>

        <div class="l-dashboard__section">
            <h2 class="h4 mb-3">Rental Information</h2>

            <dl>
                <dt>Term</dt>
                <dd>Annual</dd>
                
                <dt>Move In</dt>
                <dd>3/15/2018</dd>
                
                <dt>Rate</dt>
                <dd>$3015</dd>
            </dl>
        </div>

        <div class="l-dashboard__section">
            <h2 class="h4 mb-3">Included Amenities</h2>

            <ul>
                <li>Water &amp; Gas</li>
                <li>Cable + Internet</li>
                <li>Trash</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PropertyDetail'
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
