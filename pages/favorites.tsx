import React from 'react';

import Meta from '@/components/ui/Meta';
import Catalog from '@/components/ui/catalog/Catalog';
import Layout from '@/components/ui/layout/Layout';

import { NextPageAuth } from '@/providers/auth-provider/auth-page.type';

import { useProfile } from '@/hooks/useProfile';

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile();
	console.log(profile);

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog title='Favorites' products={profile?.favorites || []} />
			</Layout>
		</Meta>
	);
};

FavoritesPage.isOnlyUser = true;

export default FavoritesPage;
