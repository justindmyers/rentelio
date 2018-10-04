<template>
    <button class="l-form-page__submit btn btn-lg" :class="buttonClasses" :disabled="isProcessing || isInvalid">
        <transition name="fade" mode="out-in">
            <span v-if="isProcessing" :key="'form-submit-processing-1'">
                <i class="fas fa-spinner fa-spin"></i><span class="sr-only">{{ loadingText }}</span>
            </span>

            <span v-else :key="'form-submit-processing-2'">
                <slot></slot>
            </span>
        </transition>
    </button>
</template>

<script>
    export default {
        props: {
            loadingText: {
                default: 'Loading'
            },
            isProcessing: {
                required: true,
                default: false
            },
            isInvalid: {
                default: false
            },
            type: {
                default: 'primary'
            }
        },
        computed: {
            buttonClasses() {
                return `btn-${this.type}`;
            }
        }
    }
</script>

<style lang="scss">
    .fa-spin {
        animation: fa-spin 1.5s infinite linear !important;
    }
</style>