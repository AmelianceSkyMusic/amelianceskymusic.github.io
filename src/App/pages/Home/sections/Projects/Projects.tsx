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
	type Section = keyof typeof t.sections;

	return (
		<Section id="projects" className={cs.section}>
			<Typography component="h2">{t.title}</Typography>

			{projectsList.map((project, i) => (
				<Block
					className={s.sectionContainer}
					key={t.sections[project.name as Section].title}
				>
					{projectsList[i].imgLink && (
						<Link className={s.exampleLink} href={projectsList[i].imgLink} blank>
							<Img
								className={asm.join(s.previewImg)}
								src={projectsList[i].imgLink}
								alt={t.sections[project.name as Section].title}
							/>
						</Link>
					)}
					<Block className={cs.sectionItem}>
						{(t.sections[project.name as Section].title
						|| t.sections[project.name as Section].subTitle) && (
							<Block className={cs.sectionTitle}>
								{t.sections[project.name as Section].title
									&& (
										<Block className={s.title}>
											<Typography component="h3">{t.sections[project.name as Section].title}</Typography>
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
											{t.sections[project.name as Section].deployComment && (
												<Typography component="caption">{t.sections[project.name as Section].deployComment}</Typography>
											)}
										</Block>
									)}
								{t.sections[project.name as Section].subTitle
								&& <Typography component="subtitle1">{t.sections[project.name as Section].subTitle}</Typography>}
							</Block>
						)}
						{t.sections[project.name as Section].descriptions.length > 0 && (
							<Block className={cs.sectionDescription}>
								{t.sections[project.name as Section].descriptions.length > 0
								&& t.sections[project.name as Section].descriptions.map((description) => (
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
