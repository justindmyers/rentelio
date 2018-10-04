import { extendModel } from '@/utils/utils';
import dayjs from 'dayjs';

const MessageModel = (function createMessageFactory() {
    const modelPrototype = {
        id: null,
        title: null,
        text: null,
        dateSent: null,
        dateRead: null,
        recepient: null,
        sender: null,
        formattedDate: (date) => {
            return dayjs(date).format('MMM DD, YYYY')
        },
        toViewModel: function() {
            return Object.freeze({
                id: this.id,
                title: this.title,
                text: this.text,
                dateSent: this.formattedDate(this.dateSent),
                dateRead: this.formattedDate(this.dateRead),
                recipient: this.recipient.email, // transform to User object if needed
                sender: this.sender.email, // transform to User object if needed
            });
        }
    };

    return model => extendModel(model, modelPrototype);
})();

export default MessageModel;