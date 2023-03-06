import { useState } from 'react';

import { APP } from '~constants/APP';
import { appLog } from '~utils/appLog';

const APP_NAME = APP.NAME;

export function useLocalStorage<T>(store: string, key: string, initValue?: T) {
	const setLocalStorageItem = <K, D>(storeObj: Record<string, K>, value: D) => {
		localStorage.setItem(APP_NAME, JSON.stringify({
			...storeObj,
			[store]: {
				...storeObj[store],
				[key]: value,
			},
		}));
	};

	const [storedValue, setStoredValue] = useState(() => {
		try {
			const appStorage = localStorage.getItem(APP_NAME);
			const appStorageObj = appStorage ? JSON.parse(appStorage) : {};
			if (!appStorage) {
				if (initValue) setLocalStorageItem(appStorageObj, initValue);
				return initValue || null;
			}
			const storageValue = appStorageObj[store][key];
			if (!storageValue) {
				setLocalStorageItem(appStorageObj, initValue);
				return initValue || null;
			}
			return storageValue;
		} catch (error) {
			appLog('useLocalStorage', error);
			return initValue;
		}
	});

	const setValue = (value: string) => {
		if (storedValue === value) return;
		try {
			const appStorage = localStorage.getItem(APP_NAME);
			const appStorageObj = appStorage ? JSON.parse(appStorage) : {};
			setStoredValue(value);
			setLocalStorageItem(appStorageObj, value);
		} catch (error) {
			appLog('useLocalStorage', error);
		}
	};

	return [storedValue, setValue];
}
