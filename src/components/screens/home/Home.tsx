import { FC } from 'react';

import Meta from '@/components/ui/Meta';
import CatalogPagination from '@/components/ui/catalog/CatalogPagination';
import Layout from '@/components/ui/layout/Layout';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import { TypePaginationProducts } from '@/types/product.interface';

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth();
	const { logout } = useActions();
	return (
		<Meta title='Home'>
			<Layout>
				{!!user && <button onClick={() => logout()}>Logout</button>}

				<CatalogPagination title='Fresh products' data={{ products, length }} />
			</Layout>
		</Meta>
	);
};

export default Home;
