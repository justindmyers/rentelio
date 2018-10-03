<template>
    <div class="c-image-upload">
        <transition name="fade">
            <image-upload-preview :src="image.data" 
                                  :filename="image.filename" 
                                  @removed="imageRemoved(image)"
                                  v-if="image">
            </image-upload-preview>

            <image-upload-button else @added="imageAdded" ></image-upload-button>
        </transition>
    </div>
</template>

<script>
    import ImageUploadButton from '@/components/ImageUpload/ImageUploadButton';
    import ImageUploadPreview from '@/components/ImageUpload/ImageUploadPreview';

    export default {
        name: 'ImageUpload',
        components: {
            ImageUploadButton,
            ImageUploadPreview
        },
        data() {
            return {
                image: null
            }
        },
        methods: {
            imageAdded(image) {
                this.image = image;
            },
            imageRemoved(image) {
                this.image = null;
            }
        }
    };
</script>

<style lang="scss">
    @import "~@/sass/base";

    .c-image-upload {
        margin-bottom: rem-calc(10);
    }
</style>

