// import { Logo } from './Logo';
import { Container } from '~/asmlib/components/blocks/Container';
import { Main } from '~/asmlib/components/blocks/Main';
import { Typography } from '~/asmlib/components/Typography';

import s from './StartScreen.module.scss';

export function StartScreen() {
	return (

		<Main className={s.StartScreen}>
			<Container className={s.container} gridContainer>
				<Typography component="p1" style={{ fontSize: '100px' }}>
					👋
				</Typography>
			</Container>
		</Main>

	);
}
