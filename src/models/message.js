import { Model } from '@vuex-orm/core';
import User from './user';
import { formatShortDate } from '@/utils/utils';

export default class Message extends Model {
    static entity = 'message';

    static fields() {
        return {
            id: this.attr(null),
            title: this.attr(''),
            text:  this.attr(''),
            dateSent:  this.attr(''),
            dateRead:  this.attr(''),
            sender_id:  this.attr(null),
            sender: this.belongsTo(User, 'sender_id'),
            recipient_id: this.attr(null),
            recipient: this.belongsTo(User, 'recipient_id')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            title: this.title,
            text: this.text,
            dateSent: formatShortDate(this.dateSent),
            dateRead: formatShortDate(this.dateRead),
            recipient: this.recipient.email,
            sender: this.sender.email
        });
    }
}