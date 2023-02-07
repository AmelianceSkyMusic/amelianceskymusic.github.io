import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

type ComponentElementType = HTMLAnchorElement;

interface Link extends ReactHTMLElementAttributes<
ComponentElementType, React.AnchorHTMLAttributes<ComponentElementType>> {
	display?: TypographyVariants;
}

export const Link = forwardRef<ComponentElementType, Link>(({
	children,
	display,
	target = '_blank',
	rel = 'noreferrer noopener',
	className,
	...rest
}, ref) => (
	<a
		className={asm.join(className, display || 'link')}
		ref={ref}
		target={target}
		rel={rel}
		{...rest}
	>
		{children}
	</a>
));

Link.displayName = 'Link';
