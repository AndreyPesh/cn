export const PRODUCTS = 'products';

export type TypeData = {
	name: string;
	price: number;
	description?: string;
	images: string[];
	categoryId: number;
};

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export type TypeDataFilters = {
	sort?: EnumProductSort;
	searchTerm?: string;
	page?: string | number;
	perPage?: string | number;
};
