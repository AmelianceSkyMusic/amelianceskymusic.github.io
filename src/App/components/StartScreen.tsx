import { Typography } from '~/ameliance-ui/components/Typography';

import s from './StartScreen.module.scss';

export function StartScreen() {
	return (
		<div className={s.StartScreen}>
			<Typography component="p1" style={{ fontSize: '100px' }}>
				👋
			</Typography>
		</div>
	);
}
