import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { List } from '~/ameliance-ui/components/List/List';
import { ListItem } from '~/ameliance-ui/components/List/ListItem';
import { Typography } from '~/ameliance-ui/components/Typography';
import { useLang } from '~hooks/useLang';

import photo from '~assets/img/photo.png';

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
			<Block id="summary" className={cs.sectionDescription}>
				<Typography component="p1">{t.description.part1}</Typography>
				<Typography component="p1">{t.description.part2}</Typography>
				<Typography component="p1">{t.description.part3}</Typography>
				<List type="unordered">
					<Typography component="p1">{t.description.part4}</Typography>
					<ListItem>
						<Typography component="p1">{t.description.part4List.list1}</Typography>
					</ListItem>
					<ListItem>
						<Typography component="p1">{t.description.part4List.list2}</Typography>
					</ListItem>
					<ListItem>
						<Typography component="p1">{t.description.part4List.list3}</Typography>
					</ListItem>
					<ListItem>
						<Typography component="p1">{t.description.part4List.list4}</Typography>
					</ListItem>
				</List>
				<Typography component="p1">{t.description.part5}</Typography>
				<Typography component="p1">{t.description.part6}</Typography>
				<Typography component="p1">{t.description.part7}</Typography>
				<Typography component="p1">{t.description.part8}</Typography>
				<Typography component="p1">{t.description.part9}</Typography>
			</Block>
		</Section>
	);
}
