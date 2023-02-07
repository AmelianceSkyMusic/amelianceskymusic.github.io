import { Container } from '~/asmlib/components/blocks/Container';
import { Footer } from '~/asmlib/components/blocks/Footer';
import { Section } from '~/asmlib/components/blocks/Section';

import s from './FooterLayout.module.scss';

export function FooterLayout() {
	return (
		<Footer className={s.FooterLayout}>
			<Container className={s.container} gridContainer>
				<Section
					className={s.footerIcons}
					grid={{
						sm: 12, md: 10, lg: 8, xl: 6, xx: 4,
					}}
				>
					<a href="http://t.me/amelianceskymusic" target="_blank" className="icon icon--telegram" rel="noreferrer">{' '}</a>
					<a href="https://github.com/AmelianceSkyMusic" target="_blank" className="icon icon--github" rel="noreferrer">{' '}</a>
					<a href="https://www.codewars.com/users/AmelianceSkyMusic" target="_blank" className="icon icon--codewars" rel="noreferrer">{' '}</a>
					<a href="https://www.linkedin.com/" target="_blank" className="icon icon--linkedin" rel="noreferrer">{' '}</a>
					<a href="https://www.instagram.com/rsayuaie/" target="_blank" className="icon icon--instagram" rel="noreferrer">{' '}</a>
					<a href="https://www.youtube.com/channel/UCOiZPIs0WXgKS-MQJYd5Kcw" target="_blank" className="icon icon--youtube" rel="noreferrer">{' '}</a>
					<a href="https://www.behance.net/rsayuaie" target="_blank" className="icon icon--behance" rel="noreferrer">{' '}</a>
					<a href="https://dribbble.com/rsayuaie" target="_blank" className="icon icon--dribble" rel="noreferrer">{' '}</a>
				</Section>
			</Container>
		</Footer>
	);
}
