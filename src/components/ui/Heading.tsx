import cl from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

interface IHeading {
	className?: string;
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return (
		<h1 className={cl(`text-opacity-80 font-semibold`, className)}>
			{children}
		</h1>
	);
};

export default Heading;
