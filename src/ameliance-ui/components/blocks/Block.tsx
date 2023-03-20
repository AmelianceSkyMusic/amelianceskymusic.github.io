import type { ComponentProps, ElementType } from 'react';
import { forwardRef } from 'react';

import asm from 'asm-ts-scripts';

import { Component } from '../_LAB/Component';
import type { Grid } from './helpers/grid';
import { getGridClass } from './helpers/grid';

type ComponentElementType = ComponentProps<ElementType>;

interface Block extends ReactHTMLElementAttributes<ComponentElementType> {
	component?: ElementType;
	grid?: Grid;
}

export const Block = forwardRef<ComponentElementType, Block>(({
	component = 'div',
	grid,
	children,
	className,
	...rest
}, ref) => {
	const gridClass = grid && getGridClass(grid);

	const attributes	= {
		className: asm.join(className, gridClass),
		ref,
		...rest,
	};

	return (<Component as={component} {...attributes}>{children}</Component>);
});

Block.displayName = 'Block';