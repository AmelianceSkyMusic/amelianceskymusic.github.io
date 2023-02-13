import { forwardRef, useRef } from 'react';

import asm from 'asm-ts-scripts';

import { Block } from '../blocks/Block';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { Typography } from '../Typography';

import s from './AccordionItem.module.scss';

type ComponentElementType = HTMLLIElement;

interface AccordionItem extends ReactHTMLElementAttributes<ComponentElementType> {
	heading: string | string[];
	text: string | string[];
	headingComponent?: TypographyVariants;
	textComponent?: TypographyVariants;
	active: boolean;
	fullwidth?: boolean;
	iconSize?: ComponentSizes;
	onToggle: () => void;
	disabled?: boolean;
}

export const AccordionItem = forwardRef<ComponentElementType, AccordionItem>(({
	heading,
	text,
	headingComponent,
	textComponent,
	active,
	fullwidth,
	iconSize,
	onToggle,
	disabled,
	className,
	...rest
}: AccordionItem, ref) => {
	const textContentRef = useRef<HTMLDivElement>(null);

	const componentClass = [
		disabled && s.disabled,
		active && s.active,
		fullwidth && s.fullwidth,
	];

	const textContentStyle = active
		? { height: textContentRef.current?.scrollHeight }
		: { height: '0px' };

	return (
		<li
			className={asm.join(s.AccordionItem, className, componentClass)}
			ref={ref}
			{...rest}
		>
			<Block className={asm.join(s.heading, s.clickable)} onClick={onToggle}>
				<SvgIcon icon="icon--chevron-down" className={s.icon} size={iconSize} />
				{
					typeof heading === 'string'
						? <Typography component={headingComponent || 'h3'}>{heading}</Typography>
						: heading.map((item) => (
							<Typography component={headingComponent || 'h3'} key={item}>{item}</Typography>
						))
				}
			</Block>
			<Block
				className={asm.join(s.textContainer)}
				style={textContentStyle}
				ref={textContentRef}
			>
				{
					typeof text === 'string'
						? <Typography component={textComponent || 'p1'}>{text}</Typography>
						: text.map((item) => (
							<Typography component={textComponent || 'p1'} key={item}>{item}</Typography>
						))
				}
			</Block>
		</li>
	);
});

AccordionItem.displayName = 'AccordionItem';
