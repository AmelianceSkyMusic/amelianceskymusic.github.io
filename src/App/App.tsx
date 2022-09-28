import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';

function App() {
	document.body.classList.add('scroll');
	// document.body.classList.add('no-transition');
	// window.addEventListener('load', () => {
	// 	document.body.classList.remove('no-transition');
	// });
	return (
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
	);
}

export default App;
