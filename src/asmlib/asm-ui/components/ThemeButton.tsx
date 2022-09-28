import { useEffect, useState } from 'react';
import { addChangeThemeListener } from '../scripts';
import { getThemeState } from '../scripts/';

export function ThemeButton() {

	const currentTheme = getThemeState();

	const [theme, setTheme] = useState(currentTheme);
	useEffect(() => {
		const themeButton$ = document.querySelector('.theme-button') as HTMLButtonElement;
		addChangeThemeListener(themeButton$, 'light');
	});

	return (
		<button
			type="button"
			className="theme-button"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark'
				? <span className="icon icon--sun"></span>
				: <span className="icon icon--moon"></span>
			}
		</button>
	);
}
// export function ThemeButton() {
// 	const [theme, setTheme] = useState('dark');
// 	useEffect(() => {
// 		const themeButton$ = document.querySelector('.theme-button') as HTMLButtonElement;
// 		addChangeThemeListener(themeButton$, 'light');
// 	});

// 	return (
// 		<button
// 			type="button"
// 			className={theme === 'dark' ? 'icon click icon--sun theme-button' : 'icon click icon--moon theme-button'}
// 			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
// 		>
// 			{}
// 		</button>
// 	);
// }
