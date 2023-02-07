import { Block } from '~/asmlib/components/blocks/Block';
import { Section } from '~/asmlib/components/blocks/Section';
import { Typography } from '~/asmlib/components/Typography';
import { useLang } from '~hooks/useLang';

import photo from '~assets/png/photo.png';

import s from './Heading.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Heading() {
	const { heading: t } = useLang('heading');

	return (
		<Section id="heading" className={cs.section}>
			<Block className={s.titleContainer}>
				<Block className={s.titleTextContent}>
					<Typography component="h1">{t.name}</Typography>
					<Typography component="h2">{t.position}</Typography>
				</Block>
			</Block>
			<Block id="summary" className={s.summary}>
				<Typography component="p1">{t.description[0]}</Typography>
				<Typography component="p1">{t.description[1]}</Typography>
				{/* <img className={s.photo} src={photo} alt="avatar" /> */}
			</Block>
		</Section>
	);
}
