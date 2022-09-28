import { ThemeButton } from '../../../asmlib/asm-ui/components/ThemeButton';

import { HeaderLogo } from './HeaderLogo';
import { Navigation } from './Navigation';


export interface IHeaderPanelProps {
	isHideRegistration?: boolean;
}

export function HeaderPanel() {

	return (
		<div className="header-panel row">
			{/* <div className="header-panel__log col-1"> */}
			{/* <HeaderLogo /> */}
			{/* </div> */}
			{/* <nav className="header-panel__navigation col-11"> */}
			<Navigation />
			{/* <ThemeButton /> */}
			{/* </nav> */}
		</div>
	);
}
