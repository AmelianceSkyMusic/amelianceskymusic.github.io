import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useRecoilState } from 'recoil';

import { Button } from '~/asmlib/components/Button/Button';
import { Menu } from '~/asmlib/components/Menu/Menu';
import { MenuItem } from '~/asmlib/components/Menu/MenuItem';
import { SvgIcon } from '~/asmlib/components/SvgIcon/SvgIcon';
import { Typography } from '~/asmlib/components/Typography';
import { toggleTheme } from '~/asmlib/scripts/toggleTheme';
import { languageState, themeState } from '~app/state/atoms';
import { useLang } from '~hooks/useLang';
import { useLocalStorage } from '~hooks/useLocalStorage';

import { StickyButton } from './StickyButton';

import s from './MenuMobile.module.scss';

export function MenuMobile() {
	const { menu: t } = useLang('menu');

	const { i18n } = useTranslation();

	const [themeRecoil, setThemeRecoil] = useRecoilState(themeState);

	const [langRecoil, setLangRecoil] = useRecoilState(languageState);

	const [, setThemeLocalStorage] = useLocalStorage('app', 'theme');
	const [, setLangLocalStorage] = useLocalStorage('app', 'lang');

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

	const handleChangeTheme = () => {
		const newTheme = toggleTheme();
		setThemeRecoil(newTheme);
		setThemeLocalStorage(newTheme);
	};

	const handelIconMenuClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElement(event.currentTarget);
		setIsMenuOpen(true);
	};

	const handelMenuClose = () => {
		setIsMenuOpen(false);
	};

	const handleLanguageClick = () => {
		const newLang = langRecoil === 'uk' ? 'en' : 'uk';
		setLangRecoil(newLang);
		i18n.changeLanguage(newLang);
		setLangLocalStorage(newLang);
	};

	return (
		<nav className={s.MenuMobile}>
			<Menu
				isOpen={isMenuOpen}
				onClick={handelMenuClose}
				anchorElement={anchorElement}
				anchorOrigin={{
					horizontal: 'right',
					vertical: 'bottom',
				}}
				menuOrigin={{
					horizontal: 'right',
					vertical: 'bottom',
				}}
				preventItemClickClose
			>
				{/* {t.map((menuItem) => (
					<MenuItem onClick={handleLanguageClick} key={menuItem.item}>
						<Typography component="p1">
							{`${menuItem.item}`}
							{': '}
							{ `${lang in menuItem.state && menuItem.state[lang]}`}
						</Typography>
					</MenuItem>
				))} */}
				<MenuItem onClick={handleLanguageClick}>
					<Typography component="p1">
						{`${t.toggles.language.name}`}
						{': '}
						{ `${t.toggles.language.state[langRecoil as 'uk' | 'en']}`}
					</Typography>
				</MenuItem>
				<MenuItem onClick={handleChangeTheme}>
					<Typography component="p1">
						{`${t.toggles.theme.name}`}
						{': '}
						{ `${t.toggles.theme.state[themeRecoil as 'dark' | 'light']}`}
					</Typography>
				</MenuItem>
			</Menu>
			<StickyButton offset={[32, 64]}>
				<Button size="medium" type="secondary" onClick={handelIconMenuClick}>
					<SvgIcon icon="icon--menu" />
				</Button>
			</StickyButton>
		</nav>
	);
}
