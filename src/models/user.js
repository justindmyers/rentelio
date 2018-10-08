import { Model } from '@vuex-orm/core';
import Lease from '@/models/lease';

export default class User extends Model {
    static entity = 'user';

    static fields() {
        return {
            id: this.attr(null),
            username: this.attr(''),
            email: this.attr(''),
            isLandlord: this.attr(''),
            isTenant: this.attr(''),
            firstName: this.attr(''),
            lastName: this.attr(''),
            phone: this.attr(''),
            leases: this.hasMany(Lease, 'tenant')
        };
    }
}