import { useState } from 'react';

import asm from 'asm-ts-scripts';

import { AccordionItem } from '~/asmlib/components/Accordion/AccordionItem';
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

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Section id="projects" className={cs.section}>

			<AccordionItem className={s.section} heading={t.title} headingComponent="h2" fullwidth active={isOpen} onToggle={() => setIsOpen((prev) => !prev)}>
				<div className={cs.section}>

					{t.sections.map((section, i) => (

						<Block className={s.sectionContainer} key={section.title + section.subTitle}>
							<Link
								className={s.exampleLink}
								href={projectsList[i].example.deployLink}
								blank
							>
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
											<Link href={projectsList[i].codeLink} blank>
												<SvgIcon size="small" icon="icon--github" clickable />
											</Link>
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
				</div>
			</AccordionItem>

		</Section>
	);
}
