import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import s from './ListItem.module.scss';

type ComponentElementType = HTMLLIElement;

type ListItem = ReactHTMLElementAttributes<ComponentElementType>;

export const ListItem = forwardRef<ComponentElementType, ListItem>(({
	children,
	className,
	...rest
}: ListItem, ref) => (
	<li
		className={asm.join(s.ListItem, className)}
		ref={ref}
		{...rest}
	>
		{children}
	</li>
));

ListItem.displayName = 'ListItem';
