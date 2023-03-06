import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

type ComponentElementType = HTMLHeadingElement | HTMLParagraphElement;

interface Typography extends ReactHTMLElementAttributes<ComponentElementType> {
	component: TypographyVariants;
	display?: TypographyVariants;
}

export const Typography = forwardRef<ComponentElementType, Typography>(({
	component,
	display,
	children,
	className,
	...rest
}, ref) => {
	const attributes = { className: asm.join(className, display || component), ref, ...rest };
	if (component === 'h1') return <h1 {...attributes}>{children}</h1>;
	if (component === 'h2') return <h2 {...attributes}>{children}</h2>;
	if (component === 'h3') return <h3 {...attributes}>{children}</h3>;
	if (component === 'h4') return <h4 {...attributes}>{children}</h4>;
	if (component === 'h5') return <h5 {...attributes}>{children}</h5>;
	if (component === 'h6') return <h6 {...attributes}>{children}</h6>;
	if (component === 'p1') return <p {...attributes}>{children}</p>;
	if (component === 'p2') return <p {...attributes}>{children}</p>;
	if (component === 'subtitle1') return <p {...attributes}>{children}</p>;
	if (component === 'subtitle2') return <p {...attributes}>{children}</p>;
	if (component === 'caption') return <p {...attributes}>{children}</p>;
	if (component === 'overline') return <p {...attributes}>{children}</p>;
	if (component === 'button') return <p {...attributes}>{children}</p>;
	if (component === 'button-sm') return <p {...attributes}>{children}</p>;
	if (component === 'button-icon') return <p {...attributes}>{children}</p>;
	if (component === 'button-icon-sm') return <p {...attributes}>{children}</p>;
	if (component === 'link') return <p {...attributes}>{children}</p>;
	if (component === 'link-sm') return <p {...attributes}>{children}</p>;
	if (component === 'input') return <p {...attributes}>{children}</p>;
	return null;
});

Typography.displayName = 'Typography';
