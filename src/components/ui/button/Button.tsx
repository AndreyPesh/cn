import cn from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'light';
	size?: 'sm' | 'md' | 'lg';
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded font-medium shadow px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out',
				{
					'text-white bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'light',
					'px-5 py-1 text-sm': (size = 'sm'),
				},
				className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
