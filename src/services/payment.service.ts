import { IPaymentResponse } from '@/types/payment.interface';

import { instance } from '@/api/api.interceptor';

export const PaymentService = {
	async createPayment(amount: number) {
		return await instance.post<IPaymentResponse>(`/payment`, {
			amount,
		});
	},
};

export default PaymentService;
