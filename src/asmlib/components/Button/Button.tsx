import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import s from './Button.module.scss';

type ComponentElementType = HTMLButtonElement;

interface Button extends ReactHTMLElementAttributes<ComponentElementType> {
	size?: ComponentSizes;
	customSize?: number | [number, number];
	disabled?: boolean;
	type?: 'primary' | 'secondary' | 'text';
	submit?: boolean;
}

export const Button = forwardRef<ComponentElementType, Button>(({
	size,
	customSize,
	type = 'primary',
	submit,
	children,
	className,
	...rest
}, ref) => {
	// *----- check is icon should be button icon  -----
	const hasLabel = Array.isArray(children)
		? children?.some((child) => typeof child === 'string')
		: typeof children === 'string';

	// *----- create custom style -----
	let sizeStyle = {};

	if (size === 'custom' && typeof customSize === 'number') {
		sizeStyle = {
			width: `${customSize}px`,
			height: `${customSize}px`,
		};
	} else if (size === 'custom' && Array.isArray(customSize)) {
		sizeStyle = {
			width: `${customSize[0]}px`,
			height: `${customSize[1]}px`,
		};
	}

	// *----- create class from props -----
	const componentClass = [
		size && s[size],
		type && s[type],
		!hasLabel && s.icon,
	];

	return (
		<button
			type={submit ? 'submit' : 'button'}
			className={asm.join(s.Button, className, componentClass)}
			style={sizeStyle}
			ref={ref}
			{...rest}
		>
			<span className={asm.join(s.label, 'button')}>
				{children}
			</span>
		</button>
	);
});

Button.displayName = 'Button';
