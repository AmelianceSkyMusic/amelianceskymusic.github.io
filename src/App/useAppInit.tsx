import { useEffect, useLayoutEffect } from 'react';

import { useRecoilState } from 'recoil';

import { useInitTheme } from '~/ameliance-ui/hooks/useInitTheme';
import { useViewportSize } from '~/ameliance-ui/hooks/useViewportSize';

import { languageState, themeState } from './state/atoms';
import i18n from './translation/i18n';

export function useAppInit(setInitialized: (arg: boolean) => void) {
	const [themeRecoil, setThemeRecoil] = useRecoilState(themeState);
	const [langRecoil, setLangRecoil] = useRecoilState(languageState);

	// *----- set or init theme -----
	const { theme } = useInitTheme(themeRecoil);

	useEffect(() => {
		setThemeRecoil(theme || themeRecoil);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [theme]);

	useEffect(() => {
		setLangRecoil(langRecoil);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [langRecoil]);

	// *----- create special css variable to fix mobile viewport height -----
	useViewportSize();

	useLayoutEffect(() => {
		document.body.classList.add('scroll');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const initFetch = async () => {
			await i18n.changeLanguage(langRecoil);
			setInitialized(true);
		};
		initFetch();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}
