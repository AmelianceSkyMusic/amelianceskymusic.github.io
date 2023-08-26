import asm from 'asm-ts-scripts';
import { useRecoilState } from 'recoil';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { List } from '~/ameliance-ui/components/List/List';
import { ListItem } from '~/ameliance-ui/components/List/ListItem';
import { Typography } from '~/ameliance-ui/components/Typography';
import { themeState } from '~app/state/atoms';
import { useTranslationKey } from '~app/translation/useTranslationKey';
import { useScreenQuery } from '~hooks/useScreenQuery';

import photoLight from '~assets/img/photo-light.png';

import s from './Summary.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Summary() {
	const t = useTranslationKey('summary');
	const [themeRecoil] = useRecoilState(themeState);
	const imgClass = themeRecoil === 'dark' ? s.dark : s.light;
	const { isScreenSM } = useScreenQuery();

	return (
		<Section id="heading" className={cs.section}>
			{isScreenSM && <img className={asm.join(s.photo, imgClass)} src={photoLight} alt="avatar" />}
			<Block className={s.titleContainer}>
				<Block className={s.titleTextContent}>
					<Typography component="h1" className={s.title}>{t.name}</Typography>
					<Typography component="h2" className={s.subtitle}>{t.position}</Typography>
				</Block>
				{!isScreenSM && <img className={asm.join(s.photo, imgClass)} src={photoLight} alt="avatar" />}
			</Block>
			<Block id="summary" className={cs.sectionDescription}>
				<Typography component="p1">{t.description.part1}</Typography>
				<Typography component="p1">{t.description.part2}</Typography>
				<Typography component="p1">{t.description.part3}</Typography>
				<Typography component="p1">{t.description.part4}</Typography>
				<List type="unordered">
					<Typography component="p1">{t.description.part5}</Typography>
					<ListItem>
						<Typography component="p1">{t.description.part5List.list1}</Typography>
					</ListItem>
					<ListItem>
						<Typography component="p1">{t.description.part5List.list2}</Typography>
					</ListItem>
					<ListItem>
						<Typography component="p1">{t.description.part5List.list3}</Typography>
					</ListItem>
					<ListItem>
						<Typography component="p1">{t.description.part5List.list4}</Typography>
					</ListItem>
				</List>
				<Typography component="p1">{t.description.part6}</Typography>
				<Typography component="p1">{t.description.part7}</Typography>
				<Typography component="p1">{t.description.part8}</Typography>
				<Typography component="p1">{t.description.part9}</Typography>
				<Typography component="p1">{t.description.part10}</Typography>
			</Block>
		</Section>
	);
}
