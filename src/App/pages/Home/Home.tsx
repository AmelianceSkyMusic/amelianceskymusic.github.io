import { Container } from '~/ameliance-ui/components/blocks/Container';
import { Main } from '~/ameliance-ui/components/blocks/Main';
import { BurgerMenu } from '~components/BurgerMenu';
import { WelcomeScreen } from '~components/WelcomeScreen';
import { useScreenQuery } from '~hooks/useScreenQuery';

import { LeftColumn } from './LeftColumn/LeftColumn';
import { RightColumn } from './RightColumn/RightColumn';
import { SingleColumn } from './SingleColumn/SingleColumn';

import s from './Home.module.scss';

export function Home() {
	const { isScreenMD } = useScreenQuery();

	return (
		<>
			<Main className={s.Home}>
				<Container className={s.container} gridContainer>
					{isScreenMD
						? <SingleColumn />
						: (
							<>
								<LeftColumn />
								<RightColumn />
							</>
						)}
					<BurgerMenu />
				</Container>
			</Main>
			<WelcomeScreen />
		</>
	);
}
