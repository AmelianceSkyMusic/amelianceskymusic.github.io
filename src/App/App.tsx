import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '~components/Layout';
import { StartScreen } from '~components/StartScreen';
import { NotFound } from '~pages/NotFound';

import { Home } from './pages/Home';
import { useAppInit } from './useAppInit';

import './translation/i18n';

export function App() {
	const [isInitialized, setIsInitialized] = useState(false);
	useAppInit(setIsInitialized);

	if (!isInitialized) return <StartScreen />;

	return (
		<Routes>
			{/* do not use params in this project as for root repo in github */}
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/en" element={<Home lang="en" />} />
				<Route path="/uk" element={<Home lang="uk" />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
