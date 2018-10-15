<template>
    <form-page title="Register" page-class="p-register" :messages="serverMessages">
        <template>
            <form id="register-form" @submit.prevent="processForm" novalidate>
                <div class="form-group mb-4">
                    <label for="email" class="form-label">Email</label>

                    <input type="email" 
                        class="form-control" 
                        id="email" 
                        required 
                        name="email" 
                        placeholder="user@rentelio.com"
                        :class="{ 'is-invalid' : errors.has('email') }"
                        v-validate="'required|email'" 
                        v-model="username"
                        aria-describedby="email-errors">

                    <field-feedback inverse :id="'email-errors'" :field-name="'email'"></field-feedback>
                </div>

                <div class="form-group mb-4">
                    <label for="password" class="form-label">Password</label>

                    <input type="password" 
                        class="form-control" 
                        id="password" 
                        name="password" 
                        placeholder="password" 
                        :class="{ 'is-invalid' : errors.has('password') }"
                        v-validate="'required'" 
                        v-model="password"
                        ref="password"
                        aria-describedby="password-errors">

                    <field-feedback inverse :id="'password-errors'" :field-name="'password'"></field-feedback>
                </div>

                <div class="form-group mb-4">
                    <label for="confirm-password" class="form-label">Confirm Password</label>
                    <input type="password" 
                        class="form-control" 
                        id="confirm-password" 
                        name="confirm-password" 
                        placeholder="confirm password" 
                        :class="{ 'is-invalid' : errors.has('confirm-password') }"
                        v-validate="'required|confirmed:password'" 
                        v-model="confirmPassword"
                        aria-describedby="confirm-password-errors">

                    <field-feedback inverse :id="'confirm-password-errors'" :field-name="'confirm-password'"></field-feedback>
                </div>

                <div class="form-group row mb-4">
                    <div class="col">
                        <label for="first-name" class="form-label">First Name</label>
                        <input type="text" 
                            class="form-control" 
                            id="first-name" 
                            name="first-name" 
                            :class="{ 'is-invalid' : errors.has('first-name') }"
                            v-validate="'required'" 
                            v-model="profile.firstName"
                            aria-describedby="first-name-errors">

                        <field-feedback inverse :id="'first-name-errors'" :field-name="'first-name'"></field-feedback>
                    </div>
                    
                    <div class="col">
                        <label for="last-name" class="form-label">Last Name</label>
                        <input type="text" 
                            class="form-control" 
                            id="last-name" 
                            name="last-name" 
                            :class="{ 'is-invalid' : errors.has('last-name') }"
                            v-validate="'required'" 
                            v-model="profile.lastName"
                            aria-describedby="last-name-errors">

                        <field-feedback inverse :id="'last-name-errors'" :field-name="'last-name'"></field-feedback>
                    </div>
                </div>

               <div class="form-group mb-4">
                    <label for="mailing-address" class="form-label">Mailing Address</label>
                    <input type="text" 
                        class="form-control" 
                        id="mailing-address" 
                        name="mailing-address" 
                        :class="{ 'is-invalid' : errors.has('mailing-address') }"
                        v-validate="'required'" 
                        v-model="profile.mailingAddress"
                        aria-describedby="mailing-address-errors">

                    <field-feedback inverse :id="'mailing-address-errors'" :field-name="'mailing-address'"></field-feedback>
               </div>


               <div class="form-group mb-4">
                    <label for="mailing-address2" class="form-label">Mailing Address 2</label>
                    <input type="text" 
                        class="form-control" 
                        id="mailing-address2" 
                        name="mailing-address2" 
                        :class="{ 'is-invalid' : errors.has('mailing-address2') }"
                        v-validate="'required'" 
                        v-model="profile.mailingAddress2"
                        aria-describedby="mailing-address2-errors">

                    <field-feedback inverse :id="'mailing-address2-errors'" :field-name="'mailing-address2'"></field-feedback>
               </div>

                <div class="form-group row mb-5">
                    <div class="col col-5">
                        <label for="city" class="form-label">City</label>
                        <input type="text" 
                            class="form-control" 
                            id="city" 
                            name="city" 
                            :class="{ 'is-invalid' : errors.has('city') }"
                            v-validate="'required'" 
                            v-model="profile.mailingCity"
                            aria-describedby="city-errors">

                        <field-feedback inverse :id="'city-errors'" :field-name="'city'"></field-feedback>
                    </div>
                    
                    <div class="col">
                        <label for="state" class="form-label">State</label>

                        <select class="form-control"  
                            id="state" 
                            name="state" 
                            placeholder="state" 
                            :class="{ 'is-invalid' : errors.has('state') }"
                            v-validate="'required'" 
                            v-model="profile.mailingState"
                            aria-describedby="state-errors">
                                <option value="null"></option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AZ">AZ</option>
                                <option value="AR">AR</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DE">DE</option>
                                <option value="DC">DC</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="IA">IA</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="ME">ME</option>
                                <option value="MD">MD</option>
                                <option value="MA">MA</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MS">MS</option>
                                <option value="MO">MO</option>
                                <option value="MT">MT</option>
                                <option value="NE">NE</option>
                                <option value="NV">NV</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NY">NY</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WV">SV</option>
                                <option value="WI">WI</option>
                                <option value="WY">WY</option>
                        </select>

                        <field-feedback inverse :id="'state-errors'" :field-name="'state'"></field-feedback>
                    </div>

                    
                    <div class="col">
                        <label for="zip" class="form-label">Zip</label>
                        <input type="text" 
                            class="form-control" 
                            id="zip" 
                            name="zip" 
                            :class="{ 'is-invalid' : errors.has('zip') }"
                            v-validate="'required'" 
                            v-model="profile.mailingZipCode"
                            aria-describedby="zip-errors">

                        <field-feedback inverse :id="'zip-errors'" :field-name="'zip'"></field-feedback>
                    </div>
                </div>

                <div class="form-group">
                    <form-submit :is-processing="isProcessing">Register</form-submit>
                </div>
            </form>
        </template>

        <template slot="background">
            <span class="h-placeholder-image h-placeholder-image--bg">
                <lazy-img placeholder="images/placeholder.gif" src="//placeimg.com/600/600/arch" alt="Hero image" />
                <span class="h-mask is-medium"></span>
            </span>
        </template>

        <template slot="after">
            <router-link :to="{ name: 'login' }" class="btn btn-block btn-link mb-3">Already have an account?</router-link>
        </template>
    </form-page>
</template>

<script>
    import FormPage from '@/components/Forms/FormPage';
    import lazyImg from '@/components/lazyImg';
    import { formPageMixin, FeedbackMessage, FEEDBACK_MESSAGE_PRIORITY } from '@/mixins/formPage';

    export default {
        mixins: [formPageMixin],
        components: {
            FormPage,
            lazyImg
        },
        data() {
            return {
                username: null,
                password: null,
                confirmPassword: null,
                profile: {
                    firstName: null,
                    lastName: null,
                    mailingAddress: null,
                    mailingAddress2: null,
                    mailingCity: null,
                    mailingState: null,
                    mailingZipCode: null
                },
                isProcessing: false
            };
        },
        methods: {
            afterProcessForm() {
                this.register().catch(error => {
                    setTimeout(() => {
                        this.isProcessing = false;
                        this.addMessages(new FeedbackMessage(FEEDBACK_MESSAGE_PRIORITY.DANGER, error.message || error));
                    }, 500);
                });
            },
            async register() {
                this.isProcessing = true;

                await this.$store.dispatch('user/register', {
                    username: this.username, 
                    password: this.password,
                    profile: this.profile
                });

                setTimeout(() => {
                    this.isProcessing = false;
                    this.$router.push({ name: 'confirm-account' });
                }, 500);
            }
        }
    };
</script>
