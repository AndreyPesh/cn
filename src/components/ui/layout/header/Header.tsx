import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const Header = () => {
	return (
		<header
			className='bg-secondary w-full py-6 px-6 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2fr' }}
		>
			<Link href={'/'}>
				<Image
					priority
					width={180}
					height={37}
					src='/images/download.svg'
					alt='Amn v2'
				/>
			</Link>
			{/* <Search /> */}
			<div className='flex items-center justify-end gap-10'>
				<Link href={'/favorites'} className='text-white'>
					<AiOutlineHeart size={28} />
					{/* <HeaderCart /> */}
					{/* <HeaderProfile /> */}
				</Link>
			</div>
		</header>
	);
};

export default Header;
