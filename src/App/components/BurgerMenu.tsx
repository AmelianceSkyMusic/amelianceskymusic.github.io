import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useRecoilState } from 'recoil';

import { Button } from '~/asmlib/components/Button/Button';
import { Menu } from '~/asmlib/components/Menu/Menu';
import { MenuContainer } from '~/asmlib/components/Menu/MenuContainer';
import { MenuDivider } from '~/asmlib/components/Menu/MenuDivider';
import { MenuItem } from '~/asmlib/components/Menu/MenuItem';
import { SvgIcon } from '~/asmlib/components/SvgIcon/SvgIcon';
import { Typography } from '~/asmlib/components/Typography';
import { toggleTheme } from '~/asmlib/scripts/toggleTheme';
import { languageState, themeState } from '~app/state/atoms';
import { useLang } from '~hooks/useLang';
import { useScreenQuery } from '~hooks/useScreenQuery';

import { StickyButton } from './StickyButton';

export function BurgerMenu() {
	const { isScreenMD } = useScreenQuery();

	const { menu: t } = useLang('menu');
	const { navigation } = useLang('navigation');

	const { i18n } = useTranslation();

	const [themeRecoil, setThemeRecoil] = useRecoilState(themeState);

	const [langRecoil, setLangRecoil] = useRecoilState(languageState);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleChangeTheme = () => {
		const newTheme = toggleTheme();
		setThemeRecoil(newTheme);
	};

	const handelIconMenuClick = () => {
		setIsMenuOpen(true);
	};

	const handelMenuClose = () => {
		setIsMenuOpen(false);
	};

	const handleLanguageClick = () => {
		const newLang = langRecoil === 'uk' ? 'en' : 'uk';
		setLangRecoil(newLang);
		i18n.changeLanguage(newLang);
	};

	return (
		<StickyButton offset={[32, 64]}>
			<MenuContainer>
				<Menu
					isOpen={isMenuOpen}
					onClick={handelMenuClose}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					menuOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					preventItemClickClose
				>
					<MenuItem onClick={handleLanguageClick}>
						<Typography component="p1">
							{`${t.toggles.language.name}: ${t.toggles.language.state[langRecoil as 'uk' | 'en']}`}
						</Typography>
					</MenuItem>
					<MenuItem onClick={handleChangeTheme}>
						<Typography component="p1">
							{`${t.toggles.theme.name}: ${t.toggles.theme.state[themeRecoil as 'dark' | 'light']}`}
						</Typography>
					</MenuItem>
					{isScreenMD
					&& (
						<>
							<MenuDivider />
							<MenuItem><a href="#summary" className="p1">{navigation.summary}</a></MenuItem>
							<MenuItem><a href="#contacts" className="p1">{navigation.contacts}</a></MenuItem>
							<MenuItem><a href="#experience" className="p1">{navigation.experience}</a></MenuItem>
							<MenuItem><a href="#soft-skills" className="p1">{navigation.softSkills}</a></MenuItem>
							<MenuItem><a href="#hard-skills" className="p1">{navigation.hardSkills}</a></MenuItem>
							<MenuItem><a href="#projects" className="p1">{navigation.projects}</a></MenuItem>
							<MenuItem><a href="#hobbies" className="p1">{navigation.hobbies}</a></MenuItem>
						</>
					)}
				</Menu>
				<Button size="medium" type="secondary" onClick={handelIconMenuClick}>
					<SvgIcon icon="icon--menu" />
				</Button>
			</MenuContainer>
		</StickyButton>
	);
}
