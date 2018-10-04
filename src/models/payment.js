import { extendModel } from '@/utils/utils';
import dayjs from 'dayjs';

const PaymentModel = (function createPaymentFactory() {
    return payment => extendModel(payment, {
        id: null,
        description: null,
        amount: null,
        paymentDate: null,
        status: null,
        formattedPaymentDate: (date) => {
            return dayjs(date).format('MMM DD, YYYY')
        },
        toViewModel: function() {
            return Object.freeze({
                id: this.id,
                description: this.description,
                amount: this.amount,
                paymentDate: this.formattedPaymentDate(this.paymentDate),
                status: this.status
            });
        }
    });
})();

export default PaymentModel;