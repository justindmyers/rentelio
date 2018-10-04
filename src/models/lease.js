import { extendModel } from '@/utils/utils';

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

    return model => extendModel(model, modelPrototype);
})();

export default Lease;