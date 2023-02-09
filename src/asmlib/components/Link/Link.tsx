import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import s from './Link.module.scss';

type ComponentElementType = HTMLAnchorElement;

interface Link extends ReactHTMLElementAttributes<
ComponentElementType, React.AnchorHTMLAttributes<ComponentElementType>> {
	display?: TypographyVariants;
	noUnderline?: boolean;
}

export const Link = forwardRef<ComponentElementType, Link>(({
	display,
	noUnderline,
	children,
	target = '_blank',
	rel = 'noreferrer noopener',
	className,
	...rest
}, ref) => (
	<a
		className={asm.join(s.Link, className, display, 'link', noUnderline && s.noUnderline)}
		ref={ref}
		target={target}
		rel={rel}
		{...rest}
	>
		{children}
	</a>
));

Link.displayName = 'Link';
