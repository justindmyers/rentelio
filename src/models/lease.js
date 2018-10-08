import { Model } from '@vuex-orm/core';
import { formatShortDate } from '../utils/utils';
import User from '@/models/user';

export default class Lease extends Model {
    static entity = 'lease';

    static fields() {
        return {
            id: this.attr(null),
            tenant: this.attr(null),
            landlord: this.attr(null),
            landlordEntity: this.belongsTo(User, 'landlord'),
            realEstateAgent: this.attr(''),
            startDate: this.attr(''),
            endDate: this.attr(''),
            term: this.attr(''),
            paymentFrequency: this.attr(''),
            rate: this.attr(''),
            status: this.attr(''),
            listing: this.attr('')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            tenant: this.tenant,
            landlord: this.landlordEntity,
            realEstateAgent: this.realEstateAgent,
            startDate: formatShortDate(this.startDate),
            endDate: formatShortDate(this.endDate),
            term: this.term,
            paymentFrequency: this.paymentFrequency,
            rate: this.rate,
            status: this.status,
            listing: this.listing
        });
    }
}