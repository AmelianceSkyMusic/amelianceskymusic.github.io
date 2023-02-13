import { Block } from '~/asmlib/components/blocks/Block';
import { Section } from '~/asmlib/components/blocks/Section';
import { Typography } from '~/asmlib/components/Typography';
import { useLang } from '~hooks/useLang';

import photo from '~assets/png/photo.png';

import s from './Summary.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Summary() {
	const { summary: t } = useLang('summary');

	return (
		<Section id="heading" className={cs.section}>
			<Block className={s.titleContainer}>
				<Block className={s.titleTextContent}>
					<Typography component="h1" className={s.title}>{t.name}</Typography>
					<Typography component="h2" className={s.subtitle}>{t.position}</Typography>
				</Block>
				<img className={s.photo} src={photo} alt="avatar" />
			</Block>
			<Block id="summary" className={s.summary}>
				<Typography component="p1">{t.description[0]}</Typography>
				<Typography component="p1">{t.description[1]}</Typography>
			</Block>
		</Section>
	);
}
