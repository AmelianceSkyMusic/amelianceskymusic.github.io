import { atom } from 'recoil';

import { getLocalStorage } from '~utils/getLocalStorage';
import { setLocalStorage } from '~utils/setLocalStorage';

function localStorageEffect(key: string) {
	return <S>({ setSelf, onSet }: {
		setSelf: (arg: S) => void;
		onSet: (arg: (newValue: unknown, _: unknown, isReset: boolean) => void) => void;
	}) => {
		const savedValue = getLocalStorage('atoms', key);

		if (savedValue != null) {
			setSelf(savedValue);
		}

		onSet((newValue: unknown, _: unknown, isReset: boolean) => {
			if (isReset) {
				localStorage.removeItem(key);
			} else {
				setLocalStorage('atoms', key, newValue);
			}
		});
	};
}

export const themeState = atom({
	key: 'themeState',
	default: 'light',
	effects: [
		localStorageEffect('themeState'),
	],
});

export const languageState = atom({
	key: 'languageState',
	default: 'en',
	effects: [
		localStorageEffect('languageState'),
	],
});
