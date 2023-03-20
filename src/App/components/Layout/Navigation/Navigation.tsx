import { Container } from '~/ameliance-ui/components/blocks/Container';
import { Nav } from '~/ameliance-ui/components/blocks/Nav';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { Link } from '~/ameliance-ui/components/Link/Link';
import { useLang } from '~hooks/useLang';
import { useScreenQuery } from '~hooks/useScreenQuery';

import s from './Navigation.module.scss';

export function Navigation() {
	const { navigation: t } = useLang('navigation');

	const { isScreenLG } = useScreenQuery();

	return (
		<Section className={s.Navigation}>
			<Container gridContainer>
				<Nav className={s.navItems} grid={{ lg: 12, xl: 11, xx: 10 }}>
					<Link href="#summary" className={s.link} display="h4" underline={false}>{t.summary}</Link>
					<Link href="#contacts" className={s.link} display="h4" underline={false}>{t.contacts}</Link>
					<Link href="#experience" className={s.link} display="h4" underline={false}>{t.experience}</Link>
					<Link href="#education" className={s.link} display="h4" underline={false}>{t.education}</Link>
					<Link href="#hard-skills" className={s.link} display="h4" underline={false}>{t.hardSkills}</Link>
					<Link href="#soft-skills" className={s.link} display="h4" underline={false}>{t.softSkills}</Link>
					<Link href="#projects" className={s.link} display="h4" underline={false}>{t.projects}</Link>
					{!isScreenLG && <Link href="#hobbies" className={s.link} display="h4" underline={false}>{t.hobbies}</Link>}
				</Nav>
			</Container>
		</Section>
	);
}
