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
					<Link type="text" href="http://t.me/amelianceskymusic"><SvgIcon icon="icon--telegram" clickable /></Link>
					<Link type="text" href="https://github.com/AmelianceSkyMusic"><SvgIcon icon="icon--github" clickable /></Link>
					<Link type="text" href="https://www.codewars.com/users/AmelianceSkyMusic"><SvgIcon icon="icon--codewars" clickable /></Link>
					<Link type="text" href="https://www.linkedin.com/"><SvgIcon icon="icon--linkedin" clickable /></Link>
					<Link type="text" href="https://www.instagram.com/rsayuaie/"><SvgIcon icon="icon--instagram" clickable /></Link>
					<Link type="text" href="https://www.youtube.com/channel/UCOiZPIs0WXgKS-MQJYd5Kcw"><SvgIcon icon="icon--youtube" clickable /></Link>
					<Link type="text" href="https://www.behance.net/rsayuaie"><SvgIcon icon="icon--behance" clickable /></Link>
					<Link type="text" href="https://dribbble.com/rsayuaie"><SvgIcon icon="icon--dribble" clickable /></Link>
				</Section>
			</Container>
		</Footer>
	);
}
