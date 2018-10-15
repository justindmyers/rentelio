<template>
    <div class="l-dashboard__section">
        <h1 class="h3 mb-3">Select Property</h1>

        <ul class="l-grid">
            <li class="l-grid__col" v-for="property in currentUser.properties" :key="property.id">
                <button class="c-property" :class="{ 'is-selected': selectedProperty && (selectedProperty.id === property.id) }" type="button" @click="selectProperty(property)">
                    <div class="c-property__media h-placeholder-image h-placeholder-image--1-1">
                        <lazy-img placeholder="assets/placeholder.gif" src="//placeimg.com/300/300/any"></lazy-img>
                    </div>

                    <h2 class="c-property__heading h4">{{ property.formattedAddress }}</h2>
                    <p>{{ property.formattedAddress2 }}</p>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import store from '@/store';
    import lazyImg from '@/components/lazyImg';

    export default {
        components: {
            lazyImg
        },
        computed: {
            ...mapGetters({
                user: 'user/currentUser'
            }),
            currentUser() {
                return this.$store.getters['entities/user/query']()
                    .where('id', this.user.id)
                    .withAll()
                    .get()
                    .map(user => user)
                    .pop();
            },
            selectedProperty() {
                return this.$store.getters['user/selectedProperty'];
            }
        },
        methods: {
            selectProperty(property) {
                this.$store.commit('user/setSelectedProperty', property.id);
            }
        },
        beforeRouteEnter (to, from, next) {
            Promise.all([
                store.dispatch('entities/listing/fetch'),
                store.dispatch('entities/user/fetch')
            ]).then(() => {
                next();
            });
        }
    }
</script>


<style lang="scss" scoped>
    .l-grid {
        list-style-type: none;
        margin: 0 -15px;
        padding: 0;
        display: flex;
        flex-wrap: wrap;

        &__col {
            flex: 0 0 calc(50% - 15px);
            margin: 15px;
        }
    }

    .c-property {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        text-align: left;
        width: 100%;

        &.is-selected {
            position: relative;

            &:before {
                content: '\2713';
                background: rgba(255, 255, 255, 0.5);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                font-size: 50px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 0;
                border: 2px solid #535D68;
                color: #333;
                z-index: 1;
            }
        }

        &__media {
            background: #efefef;
            margin-bottom: 10px;
        }

        &__heading {
            margin-bottom: 4px;
        }

        p {
            margin-bottom: 0;
        }
    }
</style>
