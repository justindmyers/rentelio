import FormSubmit from '@/components/Forms/FormSubmit';
import FieldFeedback from '@/components/Forms/FieldFeedback';
import FormMessages from '@/components/Forms/FormMessages';

export const formPageMixin = {
    components: {
        FormSubmit,
        FieldFeedback,
        FormMessages
    },
    data() {
        return {
            isSuccessful: false,
            isProcessing: false,
            serverMessages: []
        }
    },
    mounted() {
        if(typeof this.$route.params.message !== 'undefined') {
            this.serverMessages.push(this.$route.params.message);
        }
    },
    methods: {
        addMessages(messages) {
            if(messages.length) {
                this.serverMessages.push(...messages);
            } else {
                this.serverMessages.push(messages);
            }
        },
        clearMessages() {
            this.serverMessages = [];
        },
        processForm() {
            this.$validator.validateAll().then((result) => {
                if(result) {
                    this.clearMessages();

                    if(typeof this.afterProcessForm !== 'undefined') {
                        this.afterProcessForm();
                    }
                }
            });
        },

    }
};

export const FEEDBACK_MESSAGE_PRIORITY = {
    SUCCESS: 'success',
    DANGER: 'danger',
    INFO: 'info',
    WARNING: 'warning'
};

export class FeedbackMessage {
    constructor(priority, message, dismissable = false) {
        this.priority = priority;
        this.message = message;
        this.dismissable = dismissable;
    }
}
