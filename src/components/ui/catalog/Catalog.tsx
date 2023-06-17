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
			{title && <Heading className='mb-5'>{title}</Heading>}
			{products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
				</>
			) : (
				'No products'
			)}
		</section>
	);
};

export default Catalog;
