import leasesApi from '../../api/leases';

const actions = {
    /**
     * @name fetch
     * @description Get lease for current tenant
     * @param {*} param0 
     */
    async fetch({ dispatch }) {
        const response = await leasesApi.get();

        if(response) {
            dispatch('create', { data: response.data });
        }
    },

    /**
     * @name renew
     * @description Renew lease for current tenant
     */
    async renew() {
        // TODO
    },

    /**
     * @name accept
     * @description Accept lease for current user
     */
    async accept() {
        // TODO
    },

    /**
     * @name new
     * @description Create a new lease (landlord only)
     */
    async new() {
        // TODO
    },

    /**
     * @name fetchForListing
     * @description Get all leases that belong to a specific listing (landlord only)
     * @param {*} {dispatch}
     * @param {*} listingId
     */
    async fetchForListing({dispatch}, listingId) {
        const response = await leasesApi.get('/leases.json');

        if(response) {
            dispatch('create', { data: response.data.filter(lease => lease.id === listingId)})
        }
    }
};

export default {
    actions
};