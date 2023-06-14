import axios from 'axios';
import Cookies from 'js-cookie';

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';

import { getContentType } from '@/api/api.helper';
import { instance } from '@/api/api.interceptor';

import { EnumAuthMethod, EnumNameToken } from './auth.enums';
import { saveToStorage } from './auth.helper';

export const AuthService = {
	async main(type: EnumAuthMethod, data: IEmailPassword) {
		const response = await instance<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(EnumNameToken.REFRESH);

		const response = await axios.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + '/auth/login/access-token',
			{ refreshToken },
			{
				headers: getContentType(),
			},
		);

		if (response.data.accessToken) saveToStorage(response.data);
	},
};

export default AuthService;
