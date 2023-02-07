import { Block } from '~/asmlib/components/blocks/Block';
import { Section } from '~/asmlib/components/blocks/Section';
import { Img } from '~/asmlib/components/Img';
import { Link } from '~/asmlib/components/Link';
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
			<Typography component="p2">* If error clean Local Storage!</Typography>

			{t.sections.map((section, i) => (
				<Block className={s.sectionContainer} key={section.title + section.subTitle}>
					<Link className={s.exampleLink} href={projectsList[i].example.deployLink}>
						<Img
							className={s.previewImg}
							src={projectsList[i].example.previewImg}
							alt={section.title}
						/>
					</Link>
					<Block className={cs.sectionItem}>
						{(section.title || section.subTitle) && (
							<Block className={cs.sectionTitle}>
								{section.title
									&& (
										<Block className={s.title}>
											<Typography component="h3">{section.title}</Typography>
											<Link href={projectsList[i].codeLink} className="icon-sm icon--github" />
										</Block>
									)}
								{section.subTitle && <Typography component="p2">{section.subTitle.join(', ')}</Typography>}
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

			{/* {projectsList.map((project) => (
				<Block className={s.sectionContainer} key={project.name}>
					<Link className={s.exampleLink} href={project.example.deployLink}>
						<Img
							className={s.previewImg}
							src={project.example.previewImg}
							alt={project.name}
						/>
					</Link>
					<Block className={cs.sectionItem}>
						<Block className={cs.sectionTitle}>
							<Block className={s.title}>
								<Typography component="h3">{project.name}</Typography>
								<Link href={project.codeLink} className="icon-sm icon--github" />
							</Block>
							<Typography component="p2">{project.stack.join(', ')}</Typography>
						</Block>
						<Block className={cs.sectionDescription}>
							<Typography component="p1">{project.description}</Typography>
						</Block>
					</Block>
				</Block>
			))} */}

		</Section>
	);
}
