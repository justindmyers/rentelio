import { Model } from '@vuex-orm/core';
import User from './user';
import Lease from './lease';
import { formatShortDate } from '@/utils/utils';

export default class MaintenanceRequest extends Model {
    static entity = 'maintenanceRequest';

    static fields() {
        return {
            id: this.attr(null),
            tenant_id: this.attr(null),
            tenant: this.belongsTo(User, 'tenant_id'),
            lease_id: this.attr(null),
            lease: this.belongsTo(Lease, 'lease_id'),
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
            tenant: this.tenant,
            lease: this.lease,
            title: this.title,
            description: this.description,
            date: formatShortDate(this.date),
            status: this.status,
            images: this.images
        });
    }
}