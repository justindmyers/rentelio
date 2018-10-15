import { Model } from '@vuex-orm/core';
import Lease from '@/models/lease';
import Profile from '@/models/profile';
import Listing from '@/models/listing';

export class ListingUserModel extends Model {
    static entity = 'listingUser'

    static primaryKey = ['listing_id', 'user_id']

    static fields() {
        return {
            listing_id: this.attr(null),
            user_id: this.attr(null)
        }
    }
}

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
            profile_id: this.attr(null),
            profile: this.belongsTo(Profile, 'profile_id'),
            leases: this.hasMany(Lease, 'tenant'),
            properties: this.belongsToMany(Listing, ListingUserModel, 'listing_id', 'user_id')
        };
    }
}