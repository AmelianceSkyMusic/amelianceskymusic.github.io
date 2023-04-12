import asm from 'asm-ts-scripts';

import { useToast } from '~/ameliance-ui/components/_LAB/toastbar';
import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { ButtonLink } from '~/ameliance-ui/components/Button/ButtonLink';
import { Icon } from '~/ameliance-ui/components/Icon';
import { CopyIcon } from '~/ameliance-ui/components/icons/CopyIcon';
import { Link } from '~/ameliance-ui/components/Link/Link';
import { Typography } from '~/ameliance-ui/components/Typography';
import { useTranslationKey } from '~app/translation/useTranslationKey';
import { writeTextToClipboard } from '~utils/writeTextToClipboard';

import { contactsList } from './contactsList';

import s from './Contacts.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Contacts() {
	const t = useTranslationKey('contacts');

	const { add } = useToast();

	const handleCopyButtonClick = async (event: React.MouseEvent<HTMLDivElement>) => {
		const text = event.currentTarget?.previousElementSibling?.textContent;
		if (text) {
			try {
				const result = await writeTextToClipboard(text);
				if (result) {
					add({
						title: `${t.toastTitle}:`,
						message: text,
						duration: 3000,
					});
				}
			} catch (error) {
				add({
					type: 'error',
					message: t.toastErrorTitle,
					duration: 3000,
				});
			}
		}
	};

	return (
		<Section id="contacts" className={cs.section}>

			<ButtonLink href="https://t.me/AmelianceSkyMusic" className={asm.join(s.telegramButton)} blank>
				{t.telegramButton}
			</ButtonLink>

			{t.sections.map((section, i) => (
				<Block className={cs.sectionItem} key={section.title + section.subTitle}>
					{(section.title || section.subTitle) && (
						<Block className={cs.sectionTitle}>
							{section.title && <Typography component="h3">{section.title}</Typography>}
							{section.subTitle && <Typography component="subtitle1">{section.subTitle}</Typography>}
						</Block>
					)}
					{section.descriptions.length > 0 && section.descriptions.length > 0
						&& section.descriptions.map((description) => (
							<Block
								className={asm.join(s.description, cs.sectionDescription)}
								key={description}
							>
								<Link href={contactsList[i].contactLink} display="p1" blank>{description}</Link>
								{contactsList[i].copyIcon && (
									<Icon onClick={handleCopyButtonClick}>
										<CopyIcon size="small" />
									</Icon>
								)}
							</Block>
						))}
				</Block>
			))}
		</Section>
	);
}
