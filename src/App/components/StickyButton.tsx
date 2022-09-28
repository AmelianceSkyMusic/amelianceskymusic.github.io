import './StickyButton.scss';

import { ThemeButton } from '../../asmlib/asm-ui/components/ThemeButton';
import { CONSTS } from '../consts';
import { useMediaQuery } from 'react-responsive';
import { BurgerMenu } from './BurgerMenu';

export function StickyButton() {

	const isScreenXl = useMediaQuery({ query: `(min-width: ${CONSTS.BREAKPOINTS.SCREEN_XL})` });

	return (
		<div className="sticky-button">
			{isScreenXl
				? <ThemeButton />
				: <BurgerMenu />
			}
		</div>
	);
}
