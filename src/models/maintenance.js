import { extendModel } from '@/utils/utils';
import dayjs from 'dayjs';

const MaintenanceRequest = (function createMaintenanceFactory() {
    const modelPrototype = {
        id: null,
        tenant: null,
        lease: null,
        title: null,
        description: null,
        date: null,
        status: null,
        images: [],
        formattedDate: (date) => {
            return dayjs(date).format('MMM DD, YYYY')
        },
        toViewModel: function() {
            return Object.freeze({
                id: this.id,
                tenant: this.tenant.email,
                lease: this.lease,
                title: this.title,
                description: this.description,
                date: this.formattedDate(this.date),
                status: this.status,
                images: this.images
            });
        }
    };

    return model => extendModel(model, modelPrototype);
})();

export default MaintenanceRequest;