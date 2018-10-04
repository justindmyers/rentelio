<template>
    <div class="p-user-profile container">
        <div class="l-dashboard__section">
            <h1 class="h3 mb-4">User Profile</h1>

            <form-messages :messages="serverMessages"></form-messages>

            <form @submit.prevent="processForm" novalidate>
                <div class="input-group mb-4">
                    <label for="name">Name</label>
                    <input type="text" 
                           id="name" 
                           class="form-control" 
                           name="name" 
                           v-model="name"
                           :class="{ 'is-invalid' : errors.has('name') }"
                           v-validate="'required'"
                           required
                           aria-describedby="name-errors" />

                    <field-feedback :id="'name-errors'" :field-name="'name'"></field-feedback>
                </div>

                <div class="input-group mb-4">
                    <label for="email">Email</label>
                    <input type="email" 
                           id="email" 
                           class="form-control" 
                           name="email" 
                           v-model="email"
                           :class="{ 'is-invalid' : errors.has('email') }"
                           v-validate="'required'"
                           required
                           aria-describedby="email-errors" />

                    <field-feedback :id="'email-errors'" :field-name="'email'"></field-feedback>
                </div>

                <div class="input-group mb-4">
                    <label for="phone">Phone</label>
                    <input type="phone" 
                           id="phone" 
                           class="form-control" 
                           name="phone" 
                           v-model="phone"
                           :class="{ 'is-invalid' : errors.has('phone') }"
                           v-validate="'required'"
                           required
                           aria-describedby="phone-errors"  />

                    <field-feedback :id="'phone-errors'" :field-name="'phone'"></field-feedback>
                </div>

                <div class="input-group mb-4">
                    <label for="info">Have more information?</label>
                    <textarea id="info" class="form-control" name="info" placeholder="up to 280 characters" v-model="info" />
                </div>

                <form-submit class="btn-block" :is-invalid="!isModified" :is-processing="isProcessing">Save Info</form-submit>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { formPageMixin, FeedbackMessage, FEEDBACK_MESSAGE_PRIORITY } from '@/mixins/formPage';
    import { sleep } from '@/utils/utils';

    export default {
        name: 'UserProfile',
        mixins: [formPageMixin],
        data() {
            return {
                isModified: false,
                info: null,
                localUser: {
                    name: null,
                    email: null,
                    phone: null
                }
            }
        },
        computed: {
            ...mapGetters({
                user: 'user/currentUser'
            }),
            name: {
                set(name) {
                    this.isModified = true;
                    this.localUser.name = name;
                },
                get() { 
                    return this.localUser.name !== null ? this.localUser.name : `${this.user.firstName} ${this.user.lastName}`; 
                }
            },
            email: {
                set(email) {
                    this.isModified = true;
                    this.localUser.email = email;
                },
                get() {
                    return this.localUser.email !== null ? this.localUser.email : this.user.email;
                }
            },
            phone: {
                set(phone) {
                    this.isModified = true;
                    this.localUser.phone = phone;
                },
                get() {
                    return this.localUser.phone !== null ? this.localUser.phone : this.user.phone;
                }
            }
        },
        methods: {
            afterProcessForm() {
                this.isSuccessful = false;

                if(this.isModified) {
                    this.submit().catch(error => {
                        this.isProcessing = false;
                        this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                    });
                }
            },
            async submit() {
                this.isProcessing = true;

                await sleep(500);

                this.isProcessing = false;
                this.isSuccessful = true;

                this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.SUCCESS, 'User profile updated.'))
            }
        }
    };
</script>