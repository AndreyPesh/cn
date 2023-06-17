import { FC } from 'react';

import { IProduct } from '@/types/product.interface';

import ProductItem from './product-item/ProductItem';

const Catalog: FC<{ products: IProduct[], isLoading?: boolean }> = ({ products, isLoading }) => {
  if(isLoading) return <div>Loading...</div>
	return (
		<section>
			{products.length
				? products.map(product => (
						<ProductItem key={product.id} product={product} />
				  ))
				: 'No products'}
		</section>
	);
};

export default Catalog;
