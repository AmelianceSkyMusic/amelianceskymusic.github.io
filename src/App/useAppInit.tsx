import { useEffect, useLayoutEffect } from 'react';

import { useRecoilState } from 'recoil';

import { useInitTheme } from '~/asmlib/hooks/useInitTheme';
import { useViewportHeight } from '~hooks/useViewportHeight';

import i18n from './i18n';
import { languageState, themeState } from './state/atoms';

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
