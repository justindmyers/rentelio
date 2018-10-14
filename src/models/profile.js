import { Model } from '@vuex-orm/core';

import Lease from '@/models/lease';
import User from '@/models/user';

export default class Profile extends Model {
    static entity = 'profile'

    static fields() {
        return {
            id: this.attr(null),
            firstName: this.attr(''),
            lastName: this.attr(''),
            phone: this.attr(''),
            mailingAddress: this.attr(''),
            mailingAddress2: this.attr(''),
            mailingCity: this.attr(''),
            mailingState: this.attr(''),
            mailingZipCode: this.attr(''),
            mailingCountry: this.attr(''),
            tenants: this.hasManyThrough(Lease, User, 'lease_id', 'user_id'),
            image: this.attr('')
        }
    }
}