import { Model } from '@vuex-orm/core';
import User from './user';
import { formatShortDate } from '@/utils/utils';

export default class MaintenanceRequest extends Model {
    static entity = 'maintenanceRequest';

    static fields() {
        return {
            id: this.attr(null),
            tenant: this.attr(null),
            tenantEntity: this.belongsTo(User, 'tenant'),
            lease: this.attr(null),
            //leaseEntity: this.belongsTo(Lease, 'lease'),
            title: this.attr(''),
            description:  this.attr(''),
            date:  this.attr(''),
            status: this.attr(''),
            images: this.attr([])
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            tenant: this.tenantEntity,
            lease: this.lease,
            title: this.title,
            description: this.description,
            date: formatShortDate(this.date),
            status: this.status,
            images: this.images
        });
    }
}