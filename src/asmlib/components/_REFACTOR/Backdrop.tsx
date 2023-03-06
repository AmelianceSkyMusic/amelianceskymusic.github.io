import { forwardRef, useEffect, useRef } from 'react';

import asm from 'asm-ts-scripts';

import s from './Backdrop.module.scss';

type ComponentElementType = HTMLButtonElement;

interface Backdrop extends ReactHTMLElementAttributes<ComponentElementType> {
	opacity?: number;
	disabled?: boolean;
	show: boolean;
}

export const Backdrop = forwardRef<ComponentElementType, Backdrop>(({
	className,
	disabled,
	show,
	opacity,
	...rest
}: Backdrop) => {
	const backdropRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (backdropRef && opacity) backdropRef.current?.style.setProperty('--backdrop-opacity', `${opacity}%`);
	}, [backdropRef]);

	const componentClass = [
		disabled && s.disabled,
		show && s.show,
	];

	return (
		<button
			type="button"
			className={asm.join(s.Backdrop, className, componentClass)}
			ref={backdropRef}
			{...rest}
		>
			{}
		</button>
	);
});

Backdrop.displayName = 'Backdrop';

// import asm from 'asm-ts-scripts';

// import s from './Backdrop.module.scss';

// interface IBackdropProps {
// 	onClick?: () => void;
// 	disabled?: boolean;
// 	opacity?: number;
// }

// export function Backdrop({ onClick, disabled, opacity }: IBackdropProps) {
// 	return (
// 		<button
// 			type="button"
// 			className={asm.join(s.Backdrop, disabled && s.disabled)}
// 			onClick={onClick}
// 			style={{ opacity: '100%' }}
// 		>
// 			{}
// 		</button>
// 	);
// }
