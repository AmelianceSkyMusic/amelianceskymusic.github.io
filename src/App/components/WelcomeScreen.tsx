import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import asm from 'asm-ts-scripts';
import { useRecoilState } from 'recoil';

import { Backdrop } from '~/ameliance-ui/components/Backdrop';
import { Block } from '~/ameliance-ui/components/blocks';
import { Button } from '~/ameliance-ui/components/Button/Button';
import { ButtonLink } from '~/ameliance-ui/components/Button/ButtonLink';
import { Icon } from '~/ameliance-ui/components/Icon';
import { CheckIcon } from '~/ameliance-ui/components/icons/CheckIcon';
import { MoonIcon } from '~/ameliance-ui/components/icons/MoonIcon';
import { SunIcon } from '~/ameliance-ui/components/icons/SunIcon';
import { Portal } from '~/ameliance-ui/components/Portal';
import { Typography } from '~/ameliance-ui/components/Typography';
import { toggleTheme } from '~/ameliance-ui/scripts/toggleTheme';
import { languageState, themeState } from '~app/state/atoms';
import { useTranslationKey } from '~app/translation/useTranslationKey';

import s from './WelcomeScreen.module.scss';

export function WelcomeScreen() {
	const navigate = useNavigate();

	const t = useTranslationKey('welcomeScreen');

	const [langRecoil] = useRecoilState(languageState);

	const [themeRecoil, setThemeRecoil] = useRecoilState(themeState);

	const handleChangeTheme = () => {
		const newTheme = toggleTheme();
		setThemeRecoil(newTheme);
	};

	const [isShow, setIsShOw] = useState(true);
	const [isAnimationEnd, setIsAnimationEnd] = useState(false);

	const handleClick = () => {
		setIsShOw(false);
	};

	if (!isShow && isAnimationEnd) return null;

	const handleEnLanguageOnClick = () => {
		navigate('/en');
	};

	const handleUkLanguageOnClick = () => {
		navigate('/uk');
	};

	const enActiveClass = langRecoil === 'en' && s.active;
	const ukActiveClass = langRecoil === 'uk' && s.active;
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
						<Block className={s.topPanel}>
							<Typography component="h1" display="h2" className={s.heading}>CV</Typography>
							<Block className={s.controls}>
								<Block className={s.languages}>
									<Typography
										className={asm.join(s.language, enActiveClass)}
										onClick={handleEnLanguageOnClick}
									>
										English
									</Typography>
									<Typography
										className={asm.join(s.language, ukActiveClass)}
										onClick={handleUkLanguageOnClick}
									>
										Українська
									</Typography>
								</Block>
								<Icon className={s.themeIcon} onClick={handleChangeTheme}>
									{themeRecoil === 'dark' ? <MoonIcon /> : <SunIcon />}
								</Icon>
							</Block>
						</Block>
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
