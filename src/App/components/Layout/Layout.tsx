import { Outlet, useLocation } from 'react-router-dom';

import { useScreenQuery } from '~hooks/useScreenQuery';
import { isMatchPath } from '~utils/isMatchPath';

import { Footer } from './Footer/Footer';
import { Navigation } from './Navigation/Navigation';

export function Layout() {
	const { isScreenMD } = useScreenQuery();
	const { pathname } = useLocation();
	const isHome = isMatchPath(pathname, '');
	return (
		<>
			<Outlet />
			{!isScreenMD && isHome && <Navigation />}
			<Footer />
		</>
	);
}
