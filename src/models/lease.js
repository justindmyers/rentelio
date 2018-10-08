import { Model } from '@vuex-orm/core';
import { formatShortDate } from '../utils/utils';
import User from '@/models/user';
import Listing from '@/models/listing';

export class TenantUserModel extends Model {
    static entity = 'tenantUser'

    static primaryKey = ['tenant_id', 'user_id']

    static fields() {
        return {
            tenant_id: this.attr(null),
            user_id: this.attr(null)
        }
    }
}

export default class Lease extends Model {
    static entity = 'lease';

    static fields() {
        return {
            id: this.attr(null),
            description: this.attr(''),
            tenant: this.belongsToMany(User, TenantUserModel, 'tenant_id', 'user_id'),
            landlord_id: this.attr(null),
            landlord: this.belongsTo(User, 'landlord_id'),
            realEstateAgent: this.attr(''),
            startDate: this.attr(''),
            endDate: this.attr(''),
            term: this.attr(''),
            paymentFrequency: this.attr(''),
            rate: this.attr(''),
            status: this.attr(''),
            listing_id: this.attr(null),
            listing: this.belongsTo(Listing, 'listing_id')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            description: this.description,
            tenant: this.tenant,
            landlord: this.landlord,
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