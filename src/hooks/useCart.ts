import { ICartItem } from '@/types/cart.interface';

import { useTypedSelector } from './useTypedSelector';

// export const useCart = () => useTypedSelector(state => state.cart);
export const useCart = () => {
	const items: ICartItem[] = [];
	return { items };
};
