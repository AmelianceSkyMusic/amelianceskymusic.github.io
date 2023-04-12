import { useState } from 'react';

import { useRecoilState } from 'recoil';

import { Button } from '~/ameliance-ui/components/Button/Button';
import { MenuIcon } from '~/ameliance-ui/components/icons/MenuIcon';
import { Link } from '~/ameliance-ui/components/Link/Link';
import { Menu } from '~/ameliance-ui/components/Menu/Menu';
import { MenuContainer } from '~/ameliance-ui/components/Menu/MenuContainer';
import { MenuDivider } from '~/ameliance-ui/components/Menu/MenuDivider';
import { MenuItem } from '~/ameliance-ui/components/Menu/MenuItem';
import { Typography } from '~/ameliance-ui/components/Typography';
import { toggleTheme } from '~/ameliance-ui/scripts/toggleTheme';
import { languageState, themeState } from '~app/state/atoms';
import i18n from '~app/translation/i18n';
import { useTranslationKey } from '~app/translation/useTranslationKey';
import { useScreenQuery } from '~hooks/useScreenQuery';

import { StickyButton } from './StickyButton';

export function BurgerMenu() {
	const { isScreenMD } = useScreenQuery();

	const t = useTranslationKey('menu');
	const navigation = useTranslationKey('navigation');

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
					<MenuItem>
						<Link href="./pdf/Junior Front-end Developer _ Bobomuratov (en).pdf" display="p1" blank underline={false} hover={false}>
							{t.pdf.en}
						</Link>
					</MenuItem>
					<MenuItem>
						<Link href="./pdf/Junior Front-end Developer _ Bobomuratov (uk).pdf" display="p1" blank underline={false} hover={false}>
							{t.pdf.uk}
						</Link>
					</MenuItem>
					<MenuDivider />
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
							<MenuItem>
								<Link href="#summary" display="p1" underline={false} hover={false}>
									{navigation.summary}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#contacts" display="p1" underline={false} hover={false}>
									{navigation.contacts}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#experience" display="p1" underline={false} hover={false}>
									{navigation.experience}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#education" display="p1" underline={false} hover={false}>
									{navigation.education}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#hard-skills" display="p1" underline={false} hover={false}>
									{navigation.hardSkills}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#soft-skills" display="p1" underline={false} hover={false}>
									{navigation.softSkills}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#projects" display="p1" underline={false} hover={false}>
									{navigation.projects}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link href="#hobbies" display="p1" underline={false} hover={false}>
									{navigation.hobbies}
								</Link>
							</MenuItem>
						</>
					)}
				</Menu>
				<Button size="medium" type="secondary" onClick={handelIconMenuClick}>
					<MenuIcon />
				</Button>
			</MenuContainer>
		</StickyButton>
	);
}
