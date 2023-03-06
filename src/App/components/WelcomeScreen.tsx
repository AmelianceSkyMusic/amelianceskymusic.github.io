import { useState } from 'react';

import asm from 'asm-ts-scripts';

import { Backdrop } from '~/asmlib/components/_REFACTOR/Backdrop';
import { Button } from '~/asmlib/components/Button/Button';
import { ButtonLink } from '~/asmlib/components/Button/ButtonLink';
import { Portal } from '~/asmlib/components/Portal';
import { Typography } from '~/asmlib/components/Typography';
import { useLang } from '~hooks/useLang';

import s from './WelcomeScreen.module.scss';

export function WelcomeScreen() {
	const { welcomeScreen: t } = useLang('welcomeScreen');

	const [isShow, setIsShOw] = useState(true);
	const [isAnimationEnd, setIsAnimationEnd] = useState(false);

	const handleClick = () => {
		setIsShOw(false);
	};

	if (!isShow && isAnimationEnd) return null;

	return (
		<Portal>
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
			<div className={asm.join(s.WelcomeScreen)} onClick={handleClick}>
				<Backdrop
					opacity={90}
					show={isShow}
					onAnimationEnd={() => { if (!isShow) setIsAnimationEnd(true); }}
				/>
				{isShow && (
					<div className={s.buttons}>
						<Button type="primary">{t.continue}</Button>
						<Typography component="p1">{t.or}</Typography>
						<ButtonLink href="./pdf/Junior Front-end Developer _ Bobomuratov.pdf" type="secondary">{t.pdf}</ButtonLink>
					</div>
				)}
			</div>
		</Portal>
	);
}
