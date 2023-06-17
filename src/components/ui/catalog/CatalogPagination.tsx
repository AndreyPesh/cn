import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';

import { IProduct, TypePaginationProducts } from '@/types/product.interface';

import Heading from '../Heading';
import Button from '../button/Button';

import SortDropdown from './SortDropdown';
import ProductItem from './product-item/ProductItem';
import ProductService from '@/services/product/product.service';
import { EnumProductSort } from '@/services/product/product.types';

interface ICatalogPagination {
	data: TypePaginationProducts;
	title?: string;
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1);
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST,
	);

	const { data: response, isLoading } = useQuery(
		['products', sortType],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType,
			}),
		{
			initialData: data,
		},
	);

	if (isLoading) return <div>Loading...</div>;
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown sortType={sortType} setSortType={setSortType} />
			{response.products.length ? (
				<>
					<div className='grid grid-cols-4 gap-10'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					<div className='text-center mt-16'>
						<Button
							variant='orange'
							size='sm'
							onClick={() => setPage(page => page + 1)}
						>
							Load more
						</Button>
					</div>
				</>
			) : (
				'No products'
			)}
		</section>
	);
};

export default CatalogPagination;
