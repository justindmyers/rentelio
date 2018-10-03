<template>
    <div class="c-image-upload__preview">
        <img :src="src" class="c-image-upload__img" />

        <span class="c-image-upload__filename">{{ filename }}</span>

        <button class="c-image-upload__remove" @click="deletePreview" type="button" aria-label="Remove Photo">
            <img src="@/assets/menu-close.svg" alt="" />
            <span class="sr-only">Remove Photo</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ImageUploadPreview',
    props: {
        filename: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        }
    },
    methods: {
        deletePreview() {
            this.$emit('removed', {
                data: this.src,
                filename: this.filename
            });
        }
    }
}
</script>

<style lang="scss">
    @import "~@/sass/base";

    .c-image-upload {
        &__img {
            margin-right: 15px;
            border-radius: 4px;
            border: 1px solid $gray-400;
            max-width: 75px;
        }

        &__remove {
            background: none;
            border: none;
            width: 45px;
            padding: 10px;
        }

        &__filename {
            flex: 1;
        }

        &__preview {
            display: flex;
            align-items: center;
            margin-bottom: rem-calc(10);
        }
    }
</style>

