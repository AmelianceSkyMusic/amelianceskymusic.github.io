import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import s from './Button.module.scss';

type ComponentElementType = HTMLAnchorElement;

interface ButtonLink extends ReactHTMLElementAttributes<
ComponentElementType, React.AnchorHTMLAttributes<ComponentElementType>> {
	size?: ComponentSizes;
	customSize?: number | [number, number];
	disabled?: boolean;
	type?: 'primary' | 'secondary' | 'text';
	blank?: boolean;
}

export const ButtonLink = forwardRef<ComponentElementType, ButtonLink>(({
	size,
	customSize,
	type = 'primary',
	blank,
	children,
	className,
	...rest
}, ref) => {
	const hasLabel = Array.isArray(children)
		? children?.some((child) => typeof child === 'string')
		: typeof children === 'string';

	const componentClass = [
		size && s[size],
		type && s[type],
		!hasLabel && s.icon,
	];

	const blankAttributes = blank && {
		target: '_blank',
		rel: 'noreferrer noopener',
	};

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

	return (
		<a
			className={asm.join(s.Button, className, componentClass)}
			style={sizeStyle}
			ref={ref}
			{...blankAttributes}
			{...rest}
		>
			<span className={asm.join(s.label, 'button')}>
				{children}
			</span>
		</a>
	);
});

ButtonLink.displayName = 'ButtonLink';
