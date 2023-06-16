import Image from 'next/image';
import { FC } from 'react';

import { IProduct } from '@/types/product.interface';
import FavoriteButton from './FavoriteButton';
import AddToCartButton from './AddToCartButton';
import ProductRating from './ProductRating';

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div>
				<FavoriteButton productId={product.id} />
				<AddToCartButton product={product} />
				<Image
					width={300}
					height={300}
					alt={product.name}
					src={product.images[0]}
				/>
			</div>
			<h3>{product.name}</h3>
			<div>{product.category.name}</div>
			<ProductRating rating={product} />
			<div>{product.price}</div>
		</div>
	);
};

export default ProductItem;
