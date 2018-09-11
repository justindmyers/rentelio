<template>
    <div class="c-messages">
        <h2 class="c-messages__heading h4">{{ type }}</h2>

        <table class="c-messages__table table" v-if="list.length">
            <thead>
                <tr>
                    <th class="sr-only" scope="col">Title</th>
                    <th class="sr-only" scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="listItem in list" :key="listItem.id">
                    <td><router-link :to="`${viewAllPath}/${listItem.id}`">{{ listItem[titleKey] }}</router-link></td>
                    <td>{{ listItem[dateKey] }}</td>
                </tr>
            </tbody>
        </table>

        <div class="c-messages__actions" v-if="showViewAll && viewAllPath && list.length">
            <router-link :to="viewAllPath">View All {{ type }}</router-link>
        </div>

        <div v-if="!list.length">
            No {{ type }} to Display
        </div>
    </div>
</template>

<script>
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
            margin-bottom: 0;

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
            margin-top: rem-calc(10);
        }
    }
</style>
