import { Container } from '~/asmlib/components/blocks/Container';
import { Nav } from '~/asmlib/components/blocks/Nav';
import { Section } from '~/asmlib/components/blocks/Section';
import { Link } from '~/asmlib/components/Link/Link';
import { useLang } from '~hooks/useLang';

import s from './Navigation.module.scss';

export function Navigation() {
	const { navigation: t } = useLang('navigation');

	return (
		<Section className={s.Navigation}>
			<Container gridContainer>
				<Nav className={s.navItems} grid={{ lg: 12, xl: 11, xx: 10 }}>
					<Link href="#summary" className={s.link} display="h4" noUnderline>{t.summary}</Link>
					<Link href="#contacts" className={s.link} display="h4" noUnderline>{t.contacts}</Link>
					<Link href="#experience" className={s.link} display="h4" noUnderline>{t.experience}</Link>
					<Link href="#soft-skills" className={s.link} display="h4" noUnderline>{t.softSkills}</Link>
					<Link href="#hard-skills" className={s.link} display="h4" noUnderline>{t.hardSkills}</Link>
					<Link href="#projects" className={s.link} display="h4" noUnderline>{t.projects}</Link>
					<Link href="#hobbies" className={s.link} display="h4" noUnderline>{t.hobbies}</Link>
				</Nav>
			</Container>
		</Section>
	);
}
