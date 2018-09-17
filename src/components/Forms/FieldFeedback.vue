<template>
    <div class="invalid-feedback" :id="id" aria-live="assertive">
        <transition name="slide-down">
            <div v-show="veeErrors.count()">{{ errorMessage }}</div>
        </transition>
    </div>
</template>

<script>
    import smoothReflow from 'vue-smooth-reflow';

    export default {
        mixins: [smoothReflow],
        props: {
            id: {
                required: true
            },
            veeErrors: {
                required: true
            },
            fieldName: {
                required: true
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
                return this.veeErrors.first(this.fieldName);
            }
        }
    }
</script>

