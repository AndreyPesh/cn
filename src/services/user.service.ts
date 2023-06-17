import { IFullUser, IUser } from '@/types/user.interface';

import { instance } from '@/api/api.interceptor';

type TypeData = {
	email: string;
	password?: string;
	name?: string;
	avatarPath?: string;
	phone?: string;
};

export const UserService = {
	async getProfile() {
		return await instance<IFullUser>({
			url: `/user/profile`,
			method: 'GET',
		});
	},

	async updateProfile(data: TypeData) {
		return await instance<IUser>({
			url: `/user/profile`,
			method: 'PUT',
			data,
		});
	},

	async toggleFavorite(productId: number) {
		return await instance<IUser>({
			url: `/user/profile/favorites/${productId}`,
			method: 'PATCH',
		});
	},
};

export default UserService;
