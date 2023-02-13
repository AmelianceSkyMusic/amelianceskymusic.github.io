import { useEffect, useLayoutEffect } from 'react';

import { useRecoilState } from 'recoil';

import { useInitTheme } from '~/asmlib/hooks/useInitTheme';
import { useViewportSize } from '~/asmlib/hooks/useViewportSize';

import { languageState, themeState } from './state/atoms';
import i18n from './translation/i18n';

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
	useViewportSize();

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
