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
            sender:  this.attr(null),
            senderEntity: this.belongsTo(User, 'sender'),
            recipient: this.attr(null),
            recipientEntity: this.belongsTo(User, 'recipient')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            title: this.title,
            text: this.text,
            dateSent: formatShortDate(this.dateSent),
            dateRead: formatShortDate(this.dateRead),
            recipient: this.recipientEntity.email,
            sender: this.senderEntity.email
        });
    }
}