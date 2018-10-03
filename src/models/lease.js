const Lease = (function createLeaseFactory() {
    const modelPrototype = {
        id: null,
        tenants: null,
        landlord: null,
        realEstateAgent: null,
        startDate: null,
        endDate: null,
        term: null,
        paymentFrequency: null,
        rate: null,
        status: null,
        listing: null
    };

    return function(model) {
        let extendedModel = Object.create(modelPrototype);
        Object.assign(extendedModel, model);

        return extendedModel;
    };
})();

export default Lease;