import { useEffect, useLayoutEffect } from 'react';

import { useRecoilState } from 'recoil';

import { useSvgIcons } from '~/asmlib/components/SvgIcon/useSvgIcons';
import { useInitTheme } from '~/asmlib/hooks/useInitTheme';
import { useLocalStorage } from '~hooks/useLocalStorage';
import { useViewportHeight } from '~hooks/useViewportHeight';

import i18n from './i18n';
import { languageState, themeState } from './state/atoms';

import iconAlertCircle from '~assets/svg/icon--alert-circle.svg';
import iconAlertTriangle from '~assets/svg/icon--alert-triangle.svg';
import iconBehance from '~assets/svg/icon--behance.svg';
import iconCheckCircle from '~assets/svg/icon--check-circle.svg';
import iconCodewars from '~assets/svg/icon--codewars.svg';
import iconCopy from '~assets/svg/icon--copy.svg';
import iconDiscord from '~assets/svg/icon--discord.svg';
import iconDribble from '~assets/svg/icon--dribble.svg';
import iconGithub from '~assets/svg/icon--github.svg';
import iconInfo from '~assets/svg/icon--info.svg';
import iconInstagram from '~assets/svg/icon--instagram.svg';
import iconLinkedin from '~assets/svg/icon--linkedin.svg';
import iconMenu from '~assets/svg/icon--menu.svg';
import iconMoon from '~assets/svg/icon--moon.svg';
import iconSun from '~assets/svg/icon--sun.svg';
import iconTelegram from '~assets/svg/icon--telegram.svg';
import iconX from '~assets/svg/icon--x.svg';
import iconXCircle from '~assets/svg/icon--x-circle.svg';
import iconYoutube from '~assets/svg/icon--youtube.svg';

export function useAppInit(setInitialized: (arg: boolean) => void) {
	const [, setThemeRecoil] = useRecoilState(themeState);
	const [langRecoil, setLangRecoil] = useRecoilState(languageState);

	// *----- set or init theme -----
	const [theme, setTheme] = useLocalStorage('app', 'theme');
	const initTheme = useInitTheme(theme);

	useEffect(() => {
		console.log('theme: ', theme);
		setTheme(initTheme);
		setThemeRecoil(theme);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	// *----- get or init language -----
	const [lang] = useLocalStorage('app', 'lang', langRecoil);

	useEffect(() => {
		setLangRecoil(lang);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang]);

	// *----- create special css variable to fix mobile viewport height -----
	useViewportHeight();

	// *----- include svg icon -----
	useSvgIcons(
		iconAlertCircle,
		iconAlertTriangle,
		iconBehance,
		iconCheckCircle,
		iconCodewars,
		iconCopy,
		iconDiscord,
		iconDribble,
		iconGithub,
		iconInfo,
		iconInstagram,
		iconLinkedin,
		iconMenu,
		iconMoon,
		iconSun,
		iconTelegram,
		iconX,
		iconXCircle,
		iconYoutube,
	);

	useLayoutEffect(() => {
		document.body.classList.add('scroll');
		i18n.changeLanguage(lang);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setInitialized(true);
		// document.body.classList.add('no-transition');
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
