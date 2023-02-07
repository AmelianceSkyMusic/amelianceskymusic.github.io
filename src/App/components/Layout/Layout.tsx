import { Outlet } from 'react-router-dom';

import { useScreenQuery } from '~hooks/useScreenQuery';

import { FooterLayout } from './FooterLayout/FooterLayout';
import { Navigation } from './Navigation/Navigation';

export function Layout() {
	const { isScreenMD } = useScreenQuery();
	return (
		<>
			<Outlet />
			{!isScreenMD && <Navigation />}
			<FooterLayout />
		</>
	);
}
