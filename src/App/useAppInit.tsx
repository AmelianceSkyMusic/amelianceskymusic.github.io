import { useEffect, useLayoutEffect } from 'react';

import { useRecoilState } from 'recoil';

import { useInitTheme } from '~/asmlib/hooks/useInitTheme';
import { useViewportHeight } from '~hooks/useViewportHeight';

import i18n from './i18n';
import { languageState, themeState } from './state/atoms';

export function useAppInit(setInitialized: (arg: boolean) => void) {
	const [themeRecoil, setThemeRecoil] = useRecoilState(themeState);
	const [langRecoil, setLangRecoil] = useRecoilState(languageState);

	// *----- set or init theme -----
	const initTheme = useInitTheme(themeRecoil);

	useEffect(() => {
		setThemeRecoil(initTheme || themeRecoil);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initTheme]);

	useEffect(() => {
		setLangRecoil(langRecoil);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [langRecoil]);

	// *----- create special css variable to fix mobile viewport height -----
	useViewportHeight();

	useLayoutEffect(() => {
		document.body.classList.add('scroll');
		i18n.changeLanguage(langRecoil);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setInitialized(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}