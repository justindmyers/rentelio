<template>
    <div class="invalid-feedback" :class="{ 'is-inverse': inverse }" :id="id" aria-live="assertive" v-show="hasErrors">
        <transition name="slide-down">
            <div>{{ errorMessage }}</div>
        </transition>
    </div>
</template>

<script>
    import smoothReflow from 'vue-smooth-reflow';

    export default {
        mixins: [smoothReflow],
        inject: ['$validator'],
        props: {
            id: {
                required: true
            },
            fieldName: {
                required: true
            },
            inverse: {
                type: Boolean,
                default: false
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
            errorMessage() {
                return this.errors.first(this.fieldName);
            },
            hasErrors() {
                return this.errors.has(this.fieldName);
            }
        }
    }
</script>

