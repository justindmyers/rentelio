<template>
    <div class="c-image-upload__new">
        <label class="c-image-upload__button" 
               :for="safeId('image-upload')" 
               tabindex="0" 
               ref="droparea">Upload a photo
            <input type="file"
                   class="sr-only"
                   :id="safeId('image-upload')" 
                   accept="image/*" 
                   @change="fileInputChange"/>
        </label>
    </div>
</template>

<script>
    import id from '@/mixins/id';

    export default {
        name: 'ImageUploadButton',
        mixins: [id],
        data() {
            return {
                imageLoaded: false
            }
        },
        mounted() {
            this.attachDropEvents();
        },
        methods: {
            fileInputChange(event) {
                this.handleImage(event.target.files);
            },
            handleImage(files) {
                const fileArray = [...files];

                fileArray.forEach(file => {
                    let reader = new FileReader();

                    reader.readAsDataURL(file);

                    reader.onloadend = () => {
                        this.imageLoaded = true;

                        this.updateImage(reader.result, file.name);
                    }
                });
            },
            updateImage(imageData, filename) {
                this.$emit('added', {
                    data: imageData,
                    filename: filename
                });
            },
            attachDropEvents() {
                // remove event listeners on destroy
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    this.$refs.droparea.addEventListener(eventName, event => {
                        event.preventDefault();
                        event.stopPropagation();
                    }, false);
                });

                ['dragenter', 'dragover'].forEach(eventName => {
                    this.$refs.droparea.addEventListener(eventName, () => {
                        this.$refs.droparea.classList.add('is-dropping');
                    }, false);
                });

                ['dragleave', 'drop'].forEach(eventName => {
                    this.$refs.droparea.addEventListener(eventName, () => {
                        this.$refs.droparea.classList.remove('is-dropping');
                    }, false);
                });

                this.$refs.droparea.addEventListener('drop', event => {
                    var dt = event.dataTransfer;
                    var files = dt.files;

                    this.handleImage(files);
                }, false);
            }
        }
    };
</script>

<style lang="scss">
    @import "~@/sass/base";

    .c-image-upload {
        &__button {
            background: none;
            border: none;
            color: $primary-dark;
            display: block;
            text-align: center;
            margin: 0;
            padding: 13px 10px 10px;

            &.is-dropping {
                border: 1px dashed #ccc;
                background: #eee;
            }
        }

        &__new {
            text-align: center;
            flex: 1;
        }
    }
</style>
