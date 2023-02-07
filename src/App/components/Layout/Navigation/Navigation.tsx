import { Container } from '~/asmlib/components/blocks/Container';
import { Nav } from '~/asmlib/components/blocks/Nav';
import { Section } from '~/asmlib/components/blocks/Section';

import s from './Navigation.module.scss';

export function Navigation() {
	return (
		<Section className={s.Navigation}>
			<Container gridContainer>
				<Nav className={s.navItems} grid={{ lg: 12, xl: 11, xx: 10 }}>
					<a href="#summary" className="h4">SUMMARY</a>
					<a href="#contacts" className="h4">CONTACTS</a>
					<a href="#experience" className="h4">EXPERIENCE</a>
					<a href="#soft-skills" className="h4">SOFT SKILLS</a>
					<a href="#hard-skills" className="h4">HARD SKILLS</a>
					<a href="#projects" className="h4">PROJECTS</a>
					<a href="#hobbies" className="h4">HOBBIES</a>
				</Nav>
			</Container>
		</Section>
	);
}
