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
            sender:  this.attr(null),
            senderEntity: this.belongsTo(User, 'sender'),
            recipient: this.attr(null),
            recipientEntity: this.belongsTo(User, 'recipient')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            description: this.description,
            amount: this.amount,
            paymentDate: formatShortDate(this.paymentDate),
            status: this.status,
            sender: this.senderEntity.email,
            recipient: this.recipientEntity.email
        });
    }
}