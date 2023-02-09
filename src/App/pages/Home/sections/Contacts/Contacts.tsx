import { useState } from 'react';

import asm from 'asm-ts-scripts';

import { Block } from '~/asmlib/components/blocks/Block';
import { Section } from '~/asmlib/components/blocks/Section';
import { Button } from '~/asmlib/components/Button/Button';
import { ButtonLink } from '~/asmlib/components/Button/ButtonLink';
import { Link } from '~/asmlib/components/Link/Link';
import { SvgIcon } from '~/asmlib/components/SvgIcon/SvgIcon';
import { ToastList } from '~/asmlib/components/ToastList/ToastList';
import { Typography } from '~/asmlib/components/Typography';
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

	const handleCopyButtonClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		const text = event.currentTarget?.previousElementSibling?.textContent;

		if (text) {
			try {
				await navigator.clipboard.writeText(text);
				setToast((prev) => ({
					title: 'Copied to the clipboard:',
					message: `${text}`,
					id: (+prev.id + 1).toString(),
				}));
				setIsShowToast(true);
			} catch (error) {
				setToast((prev) => ({
					title: '',
					message: 'Something went wrong=(',
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

			<ButtonLink href="https://t.me/AmelianceSkyMusic" className={asm.join(s.telegramButton)}>
				{t.telegramButton}
			</ButtonLink>

			{t.sections.map((section, i) => (
				<Block className={cs.sectionItem} key={section.title + section.subTitle}>
					{(section.title || section.subTitle) && (
						<Block className={cs.sectionTitle}>
							{section.title && <Typography component="h3">{section.title}</Typography>}
							{section.subTitle && <Typography component="p2">{section.subTitle}</Typography>}
						</Block>
					)}
					{section.descriptions.length > 0 && section.descriptions.length > 0
						&& section.descriptions.map((description) => (
							<Block
								className={asm.join(s.description, cs.sectionDescription)}
								key={description}
							>
								<Link href={contactsList[i].contactLink} display="p1">{description}</Link>
								{contactsList[i].copyIcon && (
									<Button onClick={handleCopyButtonClick} type="text" size="small">
										<SvgIcon size="small" icon="icon--copy" />
									</Button>
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
