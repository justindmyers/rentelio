<template>
    <div class="p-request-support container">
        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">Request Maintenance</h1>

            <form-messages :messages="serverMessages"></form-messages>

            <form @submit.prevent="processForm" novalidate v-if="!isSuccessful">
                <div class="input-group mb-4">
                    <label for="title">Need Help With</label>
                    <input id="title" 
                           class="form-control" 
                           name="title" 
                           type="text" 
                           placeholder="Leaking sink" 
                           :class="{ 'is-invalid' : errors.has('title') }"
                           v-validate="'required'"
                           required
                           v-model="title"
                           aria-describedby="title-errors" />

                    <field-feedback :id="'title-errors'" :field-name="'title'"></field-feedback>
                </div>

                <div class="input-group mb-4">
                    <label for="date">Since when?</label>
                    <input id="date" 
                           class="form-control" 
                           name="date" 
                           type="date" 
                           placeholder="ex: last week, 2 days ago, etc." 
                           :class="{ 'is-invalid' : errors.has('date') }"
                           v-validate="'required'"
                           required
                           v-model="date" 
                           :min="minDate" 
                           :max="maxDate"
                           aria-describedby="date-errors" />

                    <field-feedback :id="'date-errors'" :field-name="'date'"></field-feedback>
                </div>

                <div class="input-group mb-4">
                    <label for="message">Have more information?</label>
                    <textarea id="message" 
                              class="form-control" 
                              name="message" 
                              placeholder="up to 280 characters" 
                              required
                              :class="{ 'is-invalid' : errors.has('message') }"
                              v-validate="'required'" 
                              v-model="info" 
                              aria-describedby="message-errors" />

                    <field-feedback :id="'message-errors'" :field-name="'message'"></field-feedback>
                </div>

                <div class="input-group mb-4">
                    <label class="mb-3">Have a photo? (optional)</label>

                    <transition-group name="fade" mode="out-in">
                        <image-upload-preview v-for="(image, index) in images" :key="index" :src="image.data" :filename="image.filename" @removed="imageRemoved(image)"></image-upload-preview>
                    </transition-group>

                    <image-upload-button @added="imageAdded" v-if="images.length < 3"></image-upload-button>
                </div>

                <div class="input-group">
                    <form-submit class="btn-block" :is-processing="isProcessing">Submit</form-submit>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import FormMessages from '@/components/Forms/FormMessages';
    import ImageUploadButton from '@/components/ImageUpload/ImageUploadButton';
    import ImageUploadPreview from '@/components/ImageUpload/ImageUploadPreview';

    import { formPageMixin, FeedbackMessage, FEEDBACK_MESSAGE_PRIORITY } from '@/mixins/formPage';
    import { mapActions } from 'vuex';
    import dayjs from 'dayjs';

    export default {
        name: 'RequestSupport',
        mixins: [formPageMixin],
        components: {
            FormMessages,
            ImageUploadButton,
            ImageUploadPreview
        },
        data() {
            return {
                title: null,
                date: null,
                info: null,
                images: [],
                minDate: dayjs().subtract(2, 'month').format('YYYY-MM-DD'),
                maxDate: dayjs().format('YYYY-MM-DD')
            }
        },
        methods: {
            ...mapActions({
                createRequest: 'entities/maintenanceRequest/createRequest',
            }),
            afterProcessForm() {
                this.isSuccessful = false;

                this.submit().catch(error => {
                    this.isProcessing = false;
                    this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                });
            },
            async submit() {
                this.isProcessing = true;

                await this.createRequest({
                    title: this.title,
                    date: this.date,
                    description: this.info,
                    images: this.images
                });

                this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.SUCCESS, 'Your request has been submitted.'));

                this.isProcessing = false;
                this.isSuccessful = true;
            },
            imageAdded(image) {
                this.images.push(image);
            },
            imageRemoved(image) {
                this.images.splice(this.images.indexOf(image), 1);
            }
        }
    };
</script>