<template>
    <div class="p-maintenance-request">
        <div class="l-dashboard">
            <div class="container">
                <div class="l-dashboard__section">
                    <h1 class="h3">Maintenance Request Detail</h1>

                    <div v-if="request">
                        <dl>
                            <dt>Date:</dt>
                            <dd>{{ request.date }}</dd>
                        </dl>

                        <dl>
                            <dt>{{ request.title }}: </dt>
                            <dd>{{ request.description }}</dd>
                        </dl>

                        <dl v-if="request.images.length">
                            <dt>Images:</dt>
                            <dd>
                                <div v-for="(image, index) in request.images" :key="index">
                                    <img :src="image" alt="" />
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div v-else>
                        <p role="alert" class="alert alert-danger">Request not found</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ImageUploadPreview from '@/components/ImageUpload/ImageUploadPreview';

    export default {
        props: ['id'],
        components: {
            ImageUploadPreview
        },
        computed: {
            request() {
                return this.$store.getters['entities/maintenanceRequest/query']()
                                  .where('id', this.id)
                                  .withAll()
                                  .get()
                                  .map(message => message.toViewModel)
                                  .pop();
            }
        }
    };
</script>
