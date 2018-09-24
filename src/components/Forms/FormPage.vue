<template>
    <div :class="pageClasses">
        <div class="l-form-page__content">
            <div class="l-form-page__form">
                <div class="container">
                    <div class="l-form-page__header">
                        <slot name="header">
                            <h1 class="l-form-page__heading h3">{{ title }}</h1>
                        </slot>
                    </div>
                    <div class="l-form-page__inner">
                        <form-messages :messages="messages"></form-messages>

                        <transition name="fade">
                            <slot></slot>
                        </transition>
                    </div>
                </div>

                <span class="l-form-page__background" v-if="showBackground">
                    <slot name="background"></slot>
                </span>
            </div>

            <div class="l-form-page__footer">
                <slot name="after"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import FormMessages from '@/components/Forms/FormMessages';

    export default {
        inject: ['$validator'],
        components: {
            FormMessages
        },
        props: {
            pageClass: {
                type: String
            },
            messages: {
                required: true,
            },
            title: {
                type: String,
                required: false
            },
            showBackground: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            pageClasses() {
                return [
                    `l-form-page ${this.pageClass}`,
                    this.showBackground ? 'has-background' : ''
                ];
            }
        }
    }
</script>
