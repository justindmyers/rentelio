<template>
    <div :class="pageClasses">
        <div class="l-form-page__content">
            <div class="l-form-page__form">
                <div class="container">
                    <h1 class="h3 mb-4">{{ title }}</h1>

                    <form-messages :messages="messages"></form-messages>

                    <transition name="fade">
                        <slot></slot>
                    </transition>
                </div>

                <span class="l-form-page__background"></span>
            </div>

            <slot name="after"></slot>
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
                required: true
            }
        },
        computed: {
            pageClasses() {
                return `l-form-page ${this.pageClass}`;
            }
        }
    }
</script>
