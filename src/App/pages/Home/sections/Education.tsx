import { Block } from '~/asmlib/components/blocks/Block';
import { Section } from '~/asmlib/components/blocks/Section';
import { Typography } from '~/asmlib/components/Typography';
import { useLang } from '~hooks/useLang';

import cs from '~pages/Home/commonHome.module.scss';

export function Education() {
	const { education: t } = useLang('education');

	return (
		<Section id="education" className={cs.section}>
			<Typography component="h2">{t.title}</Typography>

			{t.sections.map((section) => (
				<Block className={cs.sectionItem} key={section.title}>
					{(section.title || section.subTitle) && (
						<Block className={cs.sectionTitle}>
							{section.title && <Typography component="h3">{section.title}</Typography>}
							{section.subTitle && <Typography component="subtitle1">{section.subTitle}</Typography>}
						</Block>
					)}
					{section.descriptions && section.descriptions.map((description) => (
						<Typography key={description} component="p1">{description}</Typography>
					))}
				</Block>
			))}

		</Section>
	);
}
