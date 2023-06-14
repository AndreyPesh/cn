import { instance } from '@/api/api.interceptor';

export type TypeStatisticsResponse = { name: string; value: number }[];

export const StatisticsService = {
	async getMain() {
		return await instance<TypeStatisticsResponse>({
			url: `/statistic/main`,
			method: 'GET',
		});
	},
};

export default StatisticsService;
