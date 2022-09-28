import './Header.scss';
import { HeaderPanel } from './HeaderPanel';

export function Header() {
	return (
		<header className="header">
			<div className="container">
				<HeaderPanel/>
			</div>
		</header>
	);
}
