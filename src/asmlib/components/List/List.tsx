import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import s from './List.module.scss';

type ComponentElementType = HTMLUListElement;

interface List extends ReactHTMLElementAttributes<ComponentElementType> {
	type?: 'unordered';
}

export const List = forwardRef<ComponentElementType, List>(({
	type,
	children,
	className,
	...rest
}: List, ref) => {
	const componentClass = [
		type === 'unordered' && s[type],
	];

	return (
		<ul
			className={asm.join(s.List, className, componentClass)}
			ref={ref}
			{...rest}
		>
			{children}
		</ul>
	);
});

List.displayName = 'List';
