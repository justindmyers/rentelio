import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';

import messages from './modules/messages';
import payments from './modules/payments';
import leases from './modules/leases';
import listings from './modules/listings';
import maintenanceRequest from './modules/maintenanceRequest';
import user from './modules/user';
import users from './modules/users';


import UserModel from '@/models/user';
import MessageModel from '@/models/message';
import PaymentModel from '@/models/payment';
import LeaseModel from '@/models/lease';
import ListingModel from '@/models/listing';
import MaintenanceRequestModel from '@/models/maintenance';
import ProfileModel from '@/models/profile';

import { TenantUserModel } from '@/models/lease';

Vue.use(Vuex);

// Create a new database instance.
const database = new VuexORM.Database()

database.register(UserModel, users);
database.register(MessageModel, messages);
database.register(PaymentModel, payments);
database.register(MaintenanceRequestModel, maintenanceRequest);
database.register(LeaseModel, leases);
database.register(ListingModel, listings);
database.register(ProfileModel, {});

database.register(TenantUserModel, {});

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    plugins: [VuexORM.install(database)],
    modules: {
        user
    },
    strict: debug
    // plugins: debug ? [createLogger()] : []
});