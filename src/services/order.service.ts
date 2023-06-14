import { IOrder } from '@/types/order.interface';

import { instance } from '@/api/api.interceptor';

export const OrderService = {
	async getAll() {
		return await instance<IOrder[]>({
			url: `/orders`,
			method: 'GET',
		});
	},
};

export default OrderService;
