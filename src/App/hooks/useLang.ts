import { useTranslation } from 'react-i18next';

import type { en } from '~app/translation/en';
import type { uk } from '~app/translation/uk';

export type LangType =
	& typeof uk
	& typeof en;

export function useLang(key: keyof LangType) {
	const { t } = useTranslation();
	const langObj = t<string, Partial<LangType>>(key, { returnObjects: true });
	return { [key]: langObj } as unknown as LangType;
}
