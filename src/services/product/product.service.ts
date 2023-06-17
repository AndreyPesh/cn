import { IProduct } from '@/types/product.interface';

import { instance } from '@/api/api.interceptor';

import { PRODUCTS, TypeDataFilters, TypeProductData } from './product.types';

export const ProductService = {
	async getAll(queryData = {} as TypeDataFilters) {
		return await instance<IProduct[]>({
			url: `/${PRODUCTS}`,
			method: 'GET',
			params: queryData,
		});
	},

	async getBySlug(slug: string) {
		return await instance<IProduct>({
			url: `/${PRODUCTS}/by-slug/${slug}`,
			method: 'GET',
		});
	},

	async getSimilar(productId: string | number) {
		return await instance<IProduct[]>({
			url: `/${PRODUCTS}/similar/${productId}`,
			method: 'GET',
		});
	},

	async getByCategory(categorySlug: string) {
		return await instance<IProduct[]>({
			url: `/${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET',
		});
	},

	async getById(id: string | number) {
		return await instance<IProduct>({
			url: `/${PRODUCTS}/${id}`,
			method: 'GET',
		});
	},

	async create() {
		return await instance<IProduct>({
			url: `/${PRODUCTS}`,
			method: 'POST',
		});
	},

	async update(id: string, data: TypeProductData) {
		return await instance<IProduct>({
			url: `/${PRODUCTS}/${id}`,
			method: 'PUT',
			data,
		});
	},

	async delete(id: string) {
		return await instance<IProduct>({
			url: `/${PRODUCTS}/${id}`,
			method: 'DELETE',
		});
	},

};

export default ProductService;
