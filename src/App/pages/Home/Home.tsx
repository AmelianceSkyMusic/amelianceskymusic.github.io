import { Container } from '~/asmlib/components/blocks/Container';
import { Main } from '~/asmlib/components/blocks/Main';
import { MenuMobile } from '~components/MenuMobile';
import { useScreenQuery } from '~hooks/useScreenQuery';

import { BottomColumn } from './BottomColumn/BottomColumn';
import { LeftColumn } from './LeftColumn/LeftColumn';
import { RightColumn } from './RightColumn/RightColumn';
import { SingleColumn } from './SingleColumn/SingleColumn';

import s from './Home.module.scss';

export function Home() {
	const { isScreenMD } = useScreenQuery();

	return (
		<Main className={s.Home}>
			<Container className={s.container} gridContainer>
				{isScreenMD
					? <SingleColumn />
					: (
						<>
							<LeftColumn />
							<RightColumn />
							<BottomColumn />
						</>
					)}
				<MenuMobile />
			</Container>
		</Main>
	);
}
