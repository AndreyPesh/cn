import { FC } from 'react';

import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';

const Auth: FC = () => {
	return (
		<Meta title='Auth'>
			<Heading>Auth</Heading>
			<Button variant='orange'>Auth</Button>
		</Meta>
	);
};

export default Auth;
