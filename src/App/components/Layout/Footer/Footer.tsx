import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Container } from '~/ameliance-ui/components/blocks/Container';
import { Section } from '~/ameliance-ui/components/blocks/Section';
import { Link } from '~/ameliance-ui/components/Link';
import { BehanceLogoIcon } from '~components/SVG/BehanceLogoIcon';
import { CodewarsLogoIcon } from '~components/SVG/CodewarsLogoIcon';
import { DribbleLogoIcon } from '~components/SVG/DribbleLogoIcon';
import { GithubLogoIcon } from '~components/SVG/GithubLogoIcon';
import { InstagramLogoIcon } from '~components/SVG/InstagramLogoIcon';
import { LinkedinLogoIcon } from '~components/SVG/LinkedinLogoIcon';
import { TelegramLogoIcon } from '~components/SVG/TelegramLogoIcon';
import { YoutubeLogoIcon } from '~components/SVG/YoutubeLogoIcon';

import s from './Footer.module.scss';

export function Footer() {
	return (
		<Block component="footer" className={s.Footer}>
			<Container className={s.container} gridContainer>
				<Section
					className={s.footerIcons}
					grid={{
						sm: 12, md: 10, lg: 8, xl: 6, xx: 4,
					}}
				>
					<Link type="text" href="http://t.me/amelianceskymusic" blank><TelegramLogoIcon /></Link>
					<Link type="text" href="https://github.com/AmelianceSkyMusic" blank><GithubLogoIcon /></Link>
					<Link type="text" href="https://www.codewars.com/users/AmelianceSkyMusic" blank><CodewarsLogoIcon /></Link>
					<Link type="text" href="https://www.linkedin.com/in/radzhab/" blank><LinkedinLogoIcon /></Link>
					<Link type="text" href="https://www.instagram.com/rsayuaie/" blank><InstagramLogoIcon /></Link>
					<Link type="text" href="https://www.youtube.com/watch?v=sXbKT7w_-1o&list=PL-NVwI1g2ppJn4k42RM0zPxyKT9CUdS_R" blank><YoutubeLogoIcon /></Link>
					<Link type="text" href="https://www.behance.net/rsayuaie" blank><BehanceLogoIcon /></Link>
					<Link type="text" href="https://dribbble.com/rsayuaie" blank><DribbleLogoIcon /></Link>
				</Section>
			</Container>
		</Block>
	);
}
