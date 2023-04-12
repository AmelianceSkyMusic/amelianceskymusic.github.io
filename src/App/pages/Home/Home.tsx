import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { Container } from '~/ameliance-ui/components/blocks/Container';
import { Main } from '~/ameliance-ui/components/blocks/Main';
import { languageState } from '~app/state/atoms';
import i18n from '~app/translation/i18n';
import { BurgerMenu } from '~components/BurgerMenu';
import { WelcomeScreen } from '~components/WelcomeScreen';
import { useScreenQuery } from '~hooks/useScreenQuery';

import { LeftColumn } from './LeftColumn/LeftColumn';
import { RightColumn } from './RightColumn/RightColumn';
import { SingleColumn } from './SingleColumn/SingleColumn';

import s from './Home.module.scss';

export function Home() {
	const { isScreenMD } = useScreenQuery();

	const [langRecoil, setLangRecoil] = useRecoilState(languageState);

	const { lang } = useParams();

	useEffect(() => {
		if (lang && lang !== langRecoil) {
			const newLang = lang === 'uk' ? 'uk' : 'en';
			setLangRecoil(newLang);
			i18n.changeLanguage(newLang);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang]);

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
