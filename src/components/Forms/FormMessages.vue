<template>
    <div class="c-form-messages">
        <transition name="fade" mode="out-in">
            <div role="alert" v-for="(group, index) in groupedMessages" :key="`group-${index}`">
                <ul class="alert nav flex-column" :class="[`alert-${group[0].priority}`]">
                    <li v-for="message in group" :key="message.message">
                        {{ message.message }}
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import smoothReflow from 'vue-smooth-reflow';

    export default {
        mixins: [smoothReflow],
        props: {
            messages: {
                required: true,
                default: () => []
            }
        },
        mounted() {
            this.$smoothReflow({
                transition: 'height .25s cubic-bezier(0.55, 0, 0.55, 0.2)',
                transitionEvent: {
                    propertyName: 'opacity'
                }
            });
        },
        computed: {
            groupedMessages() {
                return this.groupBy(this.messages, 'priority');
            }
        },
        methods: {
            groupBy(arr, property) {
                return arr.reduce((group, x) => {
                    if (!group[x[property]]) {
                        group[x[property]] = [];
                    }

                    group[x[property]].push(x);

                    return group;
                }, {});
            }
        }
    }
</script>

