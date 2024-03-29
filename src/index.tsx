import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import { SnackBarProvider } from './ameliance-ui/components/snackbar';
import { App } from './App/App';

import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';

import './index.scss';

export const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
	// <StrictMode>
	<BrowserRouter>
		<SnackBarProvider maxSnack={3}>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</SnackBarProvider>
	</BrowserRouter>,
	// </StrictMode>,
);
