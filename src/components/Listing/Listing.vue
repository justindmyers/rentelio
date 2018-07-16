<template>
    <div class="c-messages">
        <h2 class="c-messages__heading h5">{{ type }}</h2>

        <table class="c-messages__table table">
            <thead>
                <tr>
                    <th class="sr-only" scope="col">Title</th>
                    <th class="sr-only" scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="listItem in list" :key="listItem.id">
                    <td><router-link :to="`${viewAllPath}/${listItem.id}`">{{ listItem[titleKey] }}</router-link></td>
                    <td>{{ formatDate(listItem[dateKey]) }}</td>
                </tr>
            </tbody>
        </table>

        <div class="c-messages__actions" v-if="showViewAll && viewAllPath">
            <router-link :to="viewAllPath">View All {{ type }}</router-link>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            type: {
                type: String,
                required: true
            },
            titleKey: {
                type: String,
                required: true
            },
            dateKey: {
                type: String,
                required: true
            },
            list: {
                type: Array,
                required: true
            },
            viewAllPath: {
                type: String
            },
            showViewAll: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            formatDate(date) {
                return moment(date).format('MM/DD/YYYY');
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "~@/sass/base";

    .c-messages {
        &__heading {
            margin-bottom: rem-calc(15);
        }

        &__table {
            td {
                padding-top: rem-calc(8);
                padding-bottom: rem-calc(8);
                border: none;

                &:first-child {
                    padding-left: 0;
                }

                &:last-child {
                    padding-right: 0;
                    text-align: right;
                }
            }
        }

        &__actions {
            position: relative;
            top: 5px;
            font-size: rem-calc(14);
            text-align: center;
        }
    }
</style>
