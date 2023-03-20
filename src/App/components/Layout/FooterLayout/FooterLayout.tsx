import { Container } from '~/ameliance-ui/components/blocks/Container';
import { Footer } from '~/ameliance-ui/components/blocks/Footer';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { BehanceIcon } from '~/ameliance-ui/components/icons/BehanceIcon';
import { CodewarsIcon } from '~/ameliance-ui/components/icons/CodewarsIcon';
import { DribbleIcon } from '~/ameliance-ui/components/icons/DribbleIcon';
import { GithubIcon } from '~/ameliance-ui/components/icons/GithubIcon';
import { InstagramIcon } from '~/ameliance-ui/components/icons/InstagramIcon';
import { LinkedinIcon } from '~/ameliance-ui/components/icons/LinkedinIcon';
import { TelegramIcon } from '~/ameliance-ui/components/icons/TelegramIcon';
import { YouTubeIcon } from '~/ameliance-ui/components/icons/YouTubeIcon';
import { Link } from '~/ameliance-ui/components/Link/Link';

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
					<Link type="text" href="http://t.me/amelianceskymusic" blank><TelegramIcon /></Link>
					<Link type="text" href="https://github.com/AmelianceSkyMusic" blank><GithubIcon /></Link>
					<Link type="text" href="https://www.codewars.com/users/AmelianceSkyMusic" blank><CodewarsIcon /></Link>
					<Link type="text" href="https://www.linkedin.com/in/radzhab/" blank><LinkedinIcon /></Link>
					<Link type="text" href="https://www.instagram.com/rsayuaie/" blank><InstagramIcon /></Link>
					<Link type="text" href="https://www.youtube.com/watch?v=sXbKT7w_-1o&list=PL-NVwI1g2ppJn4k42RM0zPxyKT9CUdS_R" blank><YouTubeIcon /></Link>
					<Link type="text" href="https://www.behance.net/rsayuaie" blank><BehanceIcon /></Link>
					<Link type="text" href="https://dribbble.com/rsayuaie" blank><DribbleIcon /></Link>
				</Section>
			</Container>
		</Footer>
	);
}
