import { Model } from '@vuex-orm/core';
import { formattedAddress, formattedAddress2 } from '@/utils/utils';

export default class Listing extends Model {
    static entity = 'listing';

    static fields() {
        return {
            id: this.attr(null),
            address: this.attr(''),
            address2: this.attr(''),
            city: this.attr(''),
            state: this.attr(''),
            zipCode: this.attr(''),
            country: this.attr(''),
            numberOfRooms: this.attr(''),
            numberOfBaths: this.attr(''),
            squareFootage: this.attr(''),
            type: this.attr(''),
            petsAllowed: this.attr(''),
            amenities: this.attr(''),
            mlsCode: this.attr('')
        };
    }

    get toViewModel() {
        return Object.freeze({
            id: this.id,
            address: this.address,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode,
            country: this.country,
            numberOfRooms: this.numberOfRooms,
            numberOfBaths: this.numberOfBaths,
            squareFootage: this.squareFootage,
            type: this.type,
            petsAllowed: this.petsAllowed,
            amenities: this.amenities,
            mlsCode: this.mlsCode,
            formattedAddress: this.formattedAddress,
            formattedAddress2: this.formattedAddress2
        });
    }

    get formattedAddress() {
        return formattedAddress(this.address, this.address2) 
    }

    get formattedAddress2() {
        return formattedAddress2(this.city, this.state, this.zipCode);
    }
}