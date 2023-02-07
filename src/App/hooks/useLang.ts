import { useTranslation } from 'react-i18next';

import type { en } from '~app/en';
import type { uk } from '~app/uk';

export type LangType =
	& typeof uk
	& typeof en;

// function getValueByKey<T, K extends keyof T>(k: K, obj: T) {
// 	return obj[k];
// }

// const t = getValueByKey('test', { test: 12, b: 'xxx' } as const);

// export function useLang(key: string) {
// 	const typeObj = { [key]: key };
// 	const { t } = useTranslation();
// 	const langObj = t<string, Partial<LangType>>(key, { returnObjects: true });
// 	// const keyValue = getValueByKey(key as keyof LangType, { [key]: langObj });
// 	return { [key]: langObj } as Pick<LangType, typeObj>;
// }
export function useLang(key: keyof LangType) {
	const { t } = useTranslation();
	const langObj = t<string, Partial<LangType>>(key, { returnObjects: true });
	return { [key]: langObj } as LangType;
}

// const langObj = t<string, Pick<LangType, keyof LangType>>(key, { returnObjects: true });
// return { [key]: langObj } as Pick<LangType, key: keyof LangType>;
