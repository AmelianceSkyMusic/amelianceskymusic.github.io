import './BurgerMenu.scss';
import { useEffect, useState } from 'react';
import { addChangeThemeListener, getThemeState } from '../../asmlib/asm-ui/scripts';

export function BurgerMenu() {
	const [isShowMenu, setIsShowMenu] = useState(false);

	useEffect(() => {
		console.log('isShowMenu', isShowMenu);
	}, [isShowMenu]);

	const burgerMenu = isShowMenu ? 'burger-menu show' : 'burger-menu';

	const currentTheme = getThemeState();

	const [theme, setTheme] = useState(currentTheme);

	useEffect(() => {
		const themeButton$ = document.querySelector('.theme-menu-item') as HTMLButtonElement;
		addChangeThemeListener(themeButton$, 'light');
	});

	return (
		<div className="burger-menu-button" onScroll={() => setIsShowMenu(false)}>
			<button
				type="button"
				className="menu-button show"
				onClick={() => setIsShowMenu(!isShowMenu)}
			>
				{isShowMenu
					? <span className="icon icon--x"></span>
					: <span className="icon icon--menu"></span>
				}
			</button>
			<div className={burgerMenu}>
				<nav className="burger-menu-navigation">
					<a href="#summary" className="h4" onClick={() => setIsShowMenu(false)}>SUMMARY</a>
					<a href="#contacts" className="h4" onClick={() => setIsShowMenu(false)}>CONTACTS</a>
					<a href="#experience" className="h4" onClick={() => setIsShowMenu(false)}>EXPERIENCE</a>
					<a href="#softskills" className="h4" onClick={() => setIsShowMenu(false)}>SOFT SKILLS</a>
					<a href="#hardskills" className="h4" onClick={() => setIsShowMenu(false)}>HARD SKILLS</a>
					<a href="#projects" className="h4" onClick={() => setIsShowMenu(false)}>PROJECTS</a>
					<a href="#hobbies" className="h4" onClick={() => setIsShowMenu(false)}>HOBBIES</a>
				</nav>
				<h4 className="h4 click theme-menu-item" onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark'); setIsShowMenu(false);}}>
					Theme:
					{theme === 'dark'
						? ' Dark'
						: ' Light'}
				</h4>
			</div>

		</div>
	);
}
