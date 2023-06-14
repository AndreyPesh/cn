import { IProduct } from '@/../src/types/product.interface';

export interface ICartItem {
	id: number;
	product: IProduct;
	quantity: number;
	price: number;
}
