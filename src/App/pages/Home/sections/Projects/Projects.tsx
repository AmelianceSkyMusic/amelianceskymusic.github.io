import asm from 'asm-ts-scripts';

import { Block } from '~/asmlib/components/blocks/Block';
import { Section } from '~/asmlib/components/blocks/Section';
import { Img } from '~/asmlib/components/Img';
import { Link } from '~/asmlib/components/Link/Link';
import { SvgIcon } from '~/asmlib/components/SvgIcon/SvgIcon';
import { Typography } from '~/asmlib/components/Typography';
import { useLang } from '~hooks/useLang';

import { projectsList } from './projectsList';

import s from './Projects.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Projects() {
	const { projects: t } = useLang('projects');

	return (
		<Section id="projects" className={cs.section}>
			<Typography component="h2">{t.title}</Typography>

			{t.sections.map((section, i) => (
				<Block className={s.sectionContainer} key={section.title + section.subTitle}>
					{projectsList[i].example.deployLink ? (
						<Link className={s.exampleLink} href={projectsList[i].example.deployLink} blank>
							<Img
								className={asm.join(s.previewImg)}
								src={projectsList[i].example.previewImg}
								alt={section.title}
							/>
						</Link>
					) : (
						<div className={s.exampleLink}>
							<Img
								className={asm.join(s.previewImg, s.noLink)}
								src={projectsList[i].example.previewImg}
								alt={section.title}
							/>
						</div>
					)}
					<Block className={cs.sectionItem}>
						{(section.title || section.subTitle) && (
							<Block className={cs.sectionTitle}>
								{section.title
									&& (
										<Block className={s.title}>
											<Typography component="h3">{section.title}</Typography>
											{projectsList[i].codeLink && (
												<Link href={projectsList[i].codeLink} blank>
													<SvgIcon size="small" icon="icon--github" clickable />
												</Link>
											)}
										</Block>
									)}
								{section.subTitle && <Typography component="subtitle1">{section.subTitle}</Typography>}
							</Block>
						)}
						{section.descriptions.length > 0 && (
							<Block className={cs.sectionDescription}>
								{section.descriptions.length > 0
									&& section.descriptions.map((description) => (
										<Typography component="p1" key={description}>{description}</Typography>
									))}
							</Block>
						)}
					</Block>
				</Block>
			))}

		</Section>
	);
}
