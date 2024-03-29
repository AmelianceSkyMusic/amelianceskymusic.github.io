import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { Typography } from '~/ameliance-ui/components/Typography';
import { useTranslationKey } from '~app/translation/useTranslationKey';

import cs from '~pages/Home/commonHome.module.scss';

export function SoftSkills() {
	const t = useTranslationKey('softSkills');

	return (
		<Section id="soft-skills" className={cs.section}>
			<Typography component="h2">{t.title}</Typography>

			{t.sections.map((section) => (
				<Block className={cs.sectionItem} key={section.title + section.subTitle}>
					{(section.title || section.subTitle) && (
						<Block className={cs.sectionTitle}>
							{section.title && <Typography component="h3">{section.title}</Typography>}
							{section.subTitle && <Typography component="subtitle1">{section.subTitle}</Typography>}
						</Block>
					)}
					{section.descriptions.length > 0 && (
						<Block className={cs.sectionDescription}>
							{section.descriptions.length > 0 && section.descriptions.map((description) => (
								<Typography component="p1" key={description}>{description}</Typography>
							))}
						</Block>
					)}
				</Block>
			))}

		</Section>
	);
}
