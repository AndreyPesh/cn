import { IReview } from '@/types/review.interface';

import { instance } from '@/api/api.interceptor';

type TypeData = { rating: number; text: string };

export const ReviewService = {
	async getAll() {
		return await instance<IReview[]>({
			url: `/review`,
			method: 'GET',
		});
	},

	async leave(productId: string, data: TypeData) {
		return await instance<IReview>({
			url: `/review/leave/${productId}`,
			method: 'POST',
			data,
		});
	},

	async getAverageByProduct(productId: string | number) {
		return await instance<number>({
			url: `/review/average-by-product/${productId}`,
			method: 'GET',
		});
	},
};

export default ReviewService;
