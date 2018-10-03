const ListingViewModel = (function createListingFactory() {
    const modelPrototype = {
        id: null,
        address: null,
        address2: null,
        city: null,
        state: null,
        zipCode: null,
        country: null,
        numberOfRooms: null,
        numberOfBaths: null,
        squareFootage: null,
        type: null,
        petsAllowed: null,
        amenities: null,
        mlsCode: null,
        formattedAddress: function() {
            return `${this.address}, ${this.address2}`;
        },
        formattedAddress2: function() {
            return `${this.city}, ${this.state} ${this.zipCode}`;
        }
    };

    return function(model) {
        let extendedModel = Object.create(modelPrototype);
        Object.assign(extendedModel, model);

        return extendedModel;
    };
})();

export default ListingViewModel;