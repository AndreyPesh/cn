import cn from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import SquareButton from '@/components/ui/button/SquareButton';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';

const Cart = () => {
	const { isShow, setIsShow, ref } = useOutside(false);

	const { items, total } = useCart();

	const { push } = useRouter();

	return (
		<div className='relative' ref={ref}>
			<SquareButton
				icon={RiShoppingCartLine}
				onClick={() => {
					setIsShow(!isShow);
				}}
				number={items.length}
			/>

			<div
				className={cn(
					'absolute top-[4.2rem] w-80 -left-[12.5rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white',
					isShow ? 'open-menu' : 'close-menu',
				)}
			>
				<div className='font-normal text-lg mb-5'>My cart</div>

				{/* <div className={styles.cart}>
					{items.length ? (
						// items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Cart is empty</div>
					)}
				</div> */}

        

			</div>
		</div>
	);
};

export default Cart;
