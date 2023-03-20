import { useState } from 'react';

import asm from 'asm-ts-scripts';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { ButtonLink } from '~/ameliance-ui/components/Button/ButtonLink';
import { Icon } from '~/ameliance-ui/components/Icon';
import { CopyIcon } from '~/ameliance-ui/components/icons/CopyIcon';
import { Link } from '~/ameliance-ui/components/Link/Link';
import { ToastList } from '~/ameliance-ui/components/Toast';
import { Typography } from '~/ameliance-ui/components/Typography';
import { useLang } from '~hooks/useLang';

import { contactsList } from './contactsList';

import s from './Contacts.module.scss';
import cs from '~pages/Home/commonHome.module.scss';

export function Contacts() {
	const { contacts: t } = useLang('contacts');

	const [isShowToast, setIsShowToast] = useState(false);

	const [toast, setToast] = useState<{
		title?: string;
		message: string;
		type?: 'alert' | 'info' | 'success' | 'error' | 'warn';
		id: string;
	}>({
		title: '',
		message: '',
		type: undefined,
		id: '',
	});

	const handleCopyButtonClick = async (event: React.MouseEvent<HTMLDivElement>) => {
		const text = event.currentTarget?.previousElementSibling?.textContent;

		if (text) {
			try {
				await navigator.clipboard.writeText(text);
				setToast((prev) => ({
					title: `${t.toastTitle}:`,
					message: `${text}`,
					id: (+prev.id + 1).toString(),
				}));
				setIsShowToast(true);
			} catch (error) {
				setToast((prev) => ({
					title: '',
					message: t.toastErrorTitle,
					type: 'error',
					id: (+prev.id + 1).toString(),
				}));
				setIsShowToast(true);
			}
		}
	};

	const handleClearToastList = () => {
		setIsShowToast(false);
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

			{isShowToast && (
				<ToastList
					onClearList={handleClearToastList}
					title={toast.title}
					message={toast.message}
					type={toast.type}
					id={toast.id}
					size="flex"
					autoDeleteTime={3000}
					maxCount={3}
					position="top-right"
				/>
			)}

		</Section>
	);
}
