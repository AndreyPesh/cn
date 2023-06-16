import Cookies from 'js-cookie';

import { IAuthResponse, ITokens } from '@/store/user/user.interface';

import { EnumNameToken } from './auth.enums';

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumNameToken.ACCESS);
	return accessToken || null;
};

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(EnumNameToken.ACCESS, data.accessToken);
	Cookies.set(EnumNameToken.REFRESH, data.refreshToken);
};

export const removeFromStorage = () => {
	Cookies.remove(EnumNameToken.ACCESS);
	Cookies.remove(EnumNameToken.REFRESH);
	localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data);
	localStorage.setItem('user', JSON.stringify(data));
};
