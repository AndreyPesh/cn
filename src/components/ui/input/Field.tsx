import cn from 'clsx';
import { forwardRef } from 'react';

import { IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			placeholder,
			error,
			className,
			type = 'text',
			style,
			icon: Icon,
			...rest
		},
		ref,
	) => {
		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					<span className='block mb-1'>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
						className={cn(
							'px-4 py-2 w-full outline-none border border-gray border-solid transition-all focus:border-primary placeholder:text-gray rounded-lg',
							{
								'border-red': !!error,
							},
						)}
					/>
				</label>
				{error && <div className={'text-red mt-1 text-sm'}>{error}</div>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
