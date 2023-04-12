import { useState } from 'react';

import asm from 'asm-ts-scripts';
import { useRecoilState } from 'recoil';

import { Backdrop } from '~/ameliance-ui/components/Backdrop';
import { Block } from '~/ameliance-ui/components/blocks';
import { Button } from '~/ameliance-ui/components/Button/Button';
import { ButtonLink } from '~/ameliance-ui/components/Button/ButtonLink';
import { Portal } from '~/ameliance-ui/components/Portal';
import { Typography } from '~/ameliance-ui/components/Typography';
import { languageState } from '~app/state/atoms';
import { useTranslationKey } from '~app/translation/useTranslationKey';

import s from './WelcomeScreen.module.scss';

export function WelcomeScreen() {
	const t = useTranslationKey('welcomeScreen');

	const [langRecoil] = useRecoilState(languageState);

	const [isShow, setIsShOw] = useState(true);
	const [isAnimationEnd, setIsAnimationEnd] = useState(false);

	const handleClick = () => {
		setIsShOw(false);
	};

	if (!isShow && isAnimationEnd) return null;

	return (
		<Portal>
			<Block className={asm.join(s.WelcomeScreen)}>
				<Backdrop
					onClick={handleClick}
					opacity={90}
					show={isShow}
					onAnimationEnd={() => { if (!isShow) setIsAnimationEnd(true); }}
				/>
				{isShow && (
					<Block className={s.buttons}>
						<Button type="primary" onClick={handleClick}>{t.continue}</Button>
						<Typography component="p1">{t.or}</Typography>
						{ langRecoil === 'en'
							? <ButtonLink href="./pdf/Junior Front-end Developer _ Bobomuratov (en).pdf" type="secondary">{t.pdf}</ButtonLink>
							: <ButtonLink href="./pdf/Junior Front-end Developer _ Bobomuratov (uk).pdf" type="secondary">{t.pdf}</ButtonLink>}
					</Block>
				)}
			</Block>
		</Portal>
	);
}
