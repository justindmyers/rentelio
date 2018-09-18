import FormMessages from '@/components/Forms/FormMessages';
import FormSubmit from '@/components/Forms/FormSubmit';
import FieldFeedback from '@/components/Forms/FieldFeedback';

export const formPageMixin = {
    components: {
        FormMessages,
        FormSubmit,
        FieldFeedback
    },
    data() {
        return {
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
