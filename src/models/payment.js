import { Model } from '@vuex-orm/core';
import User from './user';
import { formatShortDate } from '@/utils/utils';

export default class Payment extends Model {
    static entity = 'payment';

    static fields() {
        return {
            id: this.attr(null),
            description: this.attr(''),
            amount: this.attr(''),
            paymentDate: this.attr(''),
            status: this.attr(''),
            sender_id:  this.attr(null),
            sender: this.belongsTo(User, 'sender_id'),
            recipient_id: this.attr(null),
            recipient: this.belongsTo(User, 'recipient_id')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            description: this.description,
            amount: this.amount,
            paymentDate: formatShortDate(this.paymentDate),
            status: this.status,
            sender: this.sender.email,
            recipient: this.recipient.email
        });
    }
}