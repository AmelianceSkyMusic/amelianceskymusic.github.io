import asm from 'asm-ts-scripts';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { Img } from '~/ameliance-ui/components/Img';
import { Link } from '~/ameliance-ui/components/Link/Link';
import { Typography } from '~/ameliance-ui/components/Typography';
import { useTranslationKey } from '~app/translation/useTranslationKey';
import { DeployIcon } from '~components/SVG/DeployIcon';
import { GithubLogoIcon } from '~components/SVG/GithubLogoIcon';
import { VideoPlayerIcon } from '~components/SVG/VideoPlayerIcon';

import { projectsList } from './projectsList';

import s from './Projects.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Projects() {
	const t = useTranslationKey('projects');

	return (
		<Section id="projects" className={cs.section}>
			<Typography component="h2">{t.title}</Typography>

			{t.sections.map((section, i) => (
				<Block className={s.sectionContainer} key={section.title + section.subTitle}>
					{projectsList[i].previewImg && (
						<Link className={s.exampleLink} href={projectsList[i].previewImg} blank>
							<Img
								className={asm.join(s.previewImg)}
								src={projectsList[i].previewImg}
								alt={section.title}
							/>
						</Link>
					)}
					<Block className={cs.sectionItem}>
						{(section.title || section.subTitle) && (
							<Block className={cs.sectionTitle}>
								{section.title
									&& (
										<Block className={s.title}>
											<Typography component="h3">{section.title}</Typography>
											{projectsList[i].videoLink && (
												<Link
													className={s.icon}
													href={projectsList[i].videoLink}
													blank
												>
													<VideoPlayerIcon size="custom" width="16px" height="16px" />
												</Link>
											)}
											{projectsList[i].codeLink && (
												<Link
													className={s.icon}
													href={projectsList[i].codeLink}
													blank
												>
													<GithubLogoIcon size="custom" width="16px" height="16px" />
												</Link>
											)}
											{projectsList[i].deployLink && (
												<Link
													className={s.icon}
													href={projectsList[i].deployLink}
													blank
												>
													<DeployIcon size="custom" width="16px" height="16px" />
												</Link>
											)}
											{section.deployComment && (
												<Typography component="caption">{section.deployComment}</Typography>
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
