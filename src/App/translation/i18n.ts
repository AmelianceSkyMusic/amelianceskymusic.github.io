import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import { en } from './en';
import { uk } from './uk';

i18n
	.use(initReactI18next)
	.init({
		// debug: true,
		supportedLngs: ['en', 'uk'],
		fallbackLng: 'en',
		react: { useSuspense: false },
		interpolation: {
			escapeValue: false,
		},
		returnNull: false,
		resources: {
			en: {
				translation: en,
			},
			uk: {
				translation: uk,
			},
		},
	});

export default i18n;
