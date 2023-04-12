import React, {
	useContext, useEffect, useMemo, useState,
} from 'react';

import { en } from './en';
import { uk } from './uk';

const defaultLanguage = 'en';

export type Translation = typeof en | typeof uk;

interface Translations {
	en: typeof en;
	uk: typeof uk;
}

const translations: Translations = {
	en,
	uk,
};

interface ContextValue {
	language: Languages;
	setLanguage: (language: Languages) => void;
	translation: Translation; // TODO: add narrowing
	ready: boolean;
}

const TranslationContext = React.createContext<ContextValue>({} as ContextValue);

export function useTranslation() {
	return useContext(TranslationContext);
}

interface TranslationProvider {
	children: React.ReactNode;
	initLanguage: Languages;
}

export type Languages = 'en' | 'uk'; // TODO: add generative

export function TranslationProvider({
	children,
	initLanguage,
}: TranslationProvider) {
	const [language, setLanguage] = useState<Languages>(initLanguage || defaultLanguage);
	const [ready, setReady] = useState(false);

	const [translation, setTranslation] = useState<Translation>(translations.en);

	useEffect(() => {
		Object.keys(translations).forEach((key) => {
			const lang = key as Languages;
			setTranslation(translations[lang]);
		});
		setReady(true);
	}, []);

	useEffect(() => {
		setTranslation(translations[language]);
	}, [language]);

	const contextValue = useMemo(() => ({
		language, setLanguage, translation, ready,
	}), [language, ready, translation]);

	return (
		<TranslationContext.Provider value={contextValue}>
			{children}
		</TranslationContext.Provider>
	);
}
