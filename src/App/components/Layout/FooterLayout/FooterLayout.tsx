import { Container } from '~/asmlib/components/blocks/Container';
import { Footer } from '~/asmlib/components/blocks/Footer';
import { Section } from '~/asmlib/components/blocks/Section';
import { Link } from '~/asmlib/components/Link/Link';
import { SvgIcon } from '~/asmlib/components/SvgIcon/SvgIcon';

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
					<Link type="text" href="http://t.me/amelianceskymusic" blank><SvgIcon icon="icon--telegram" clickable /></Link>
					<Link type="text" href="https://github.com/AmelianceSkyMusic" blank><SvgIcon icon="icon--github" clickable /></Link>
					<Link type="text" href="https://www.codewars.com/users/AmelianceSkyMusic" blank><SvgIcon icon="icon--codewars" clickable /></Link>
					<Link type="text" href="https://www.linkedin.com/in/radzhab/" blank><SvgIcon icon="icon--linkedin" clickable /></Link>
					<Link type="text" href="https://www.instagram.com/rsayuaie/" blank><SvgIcon icon="icon--instagram" clickable /></Link>
					<Link type="text" href="https://www.youtube.com/watch?v=sXbKT7w_-1o&list=PL-NVwI1g2ppJn4k42RM0zPxyKT9CUdS_R" blank><SvgIcon icon="icon--youtube" clickable /></Link>
					<Link type="text" href="https://www.behance.net/rsayuaie" blank><SvgIcon icon="icon--behance" clickable /></Link>
					<Link type="text" href="https://dribbble.com/rsayuaie" blank><SvgIcon icon="icon--dribble" clickable /></Link>
				</Section>
			</Container>
		</Footer>
	);
}
