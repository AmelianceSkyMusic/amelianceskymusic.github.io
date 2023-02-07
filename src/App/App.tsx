import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { Layout } from '~components/Layout';
import { StartScreen } from '~components/StartScreen';

import { Home } from './pages/Home';
import { useAppInit } from './useAppInit';

import './i18n';

export function App() {
	const [isInitialized, setIsInitialized] = useState(false);
	useAppInit(setIsInitialized);

	if (!isInitialized) <StartScreen />;

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}
