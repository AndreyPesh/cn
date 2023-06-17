import { FC } from 'react';

import { IProduct } from '@/types/product.interface';

import Heading from '../Heading';

import ProductItem from './product-item/ProductItem';

interface ICatalog {
	products: IProduct[];
	isLoading?: boolean;
	title?: string;
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <div>Loading...</div>;
	return (
		<section>
			{title && <Heading>{title}</Heading>}
			{products.length
				? products.map(product => (
						<ProductItem key={product.id} product={product} />
				  ))
				: 'No products'}
		</section>
	);
};

export default Catalog;
