import { atom } from 'recoil';

export const themeState = atom({
	key: 'themeState',
	default: 'light',
});

export const languageState = atom({
	key: 'languageState',
	default: 'en',
});
