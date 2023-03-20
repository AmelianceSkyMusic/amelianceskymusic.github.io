import asm from 'asm-ts-scripts';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { Img } from '~/ameliance-ui/components/Img';
import { Link } from '~/ameliance-ui/components/Link/Link';
import { Typography } from '~/ameliance-ui/components/Typography';
import { GithubLogoIcon } from '~components/SVG/GithubLogoIcon';
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
												<Link
													className={s.codeLink}
													href={projectsList[i].codeLink}
													blank
												>
													<GithubLogoIcon size="custom" width="16px" height="16px" />
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
