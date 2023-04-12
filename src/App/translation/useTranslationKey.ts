import { useTranslation } from 'react-i18next';

import type { en } from '~app/translation/en';

export type LangType = typeof en;

export function useTranslationKey<K extends keyof LangType>(
	key: K,
): LangType[K] {
	const { t } = useTranslation();
	const langObj = t<string, LangType[K]>(key, { returnObjects: true });
	return langObj;
}
