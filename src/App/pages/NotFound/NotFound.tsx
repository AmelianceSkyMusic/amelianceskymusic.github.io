import { useNavigate } from 'react-router-dom';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Container } from '~/ameliance-ui/components/blocks/Container';
import { Main } from '~/ameliance-ui/components/blocks/Main';
import { Button } from '~/ameliance-ui/components/Button/Button';
import { Typography } from '~/ameliance-ui/components/Typography';
import { ROUTES } from '~constants/ROUTES';
import { useLang } from '~hooks/useLang';

import s from './NotFound.module.scss';

export function NotFound() {
	const { notFound: t } = useLang('notFound');
	const navigate = useNavigate();

	return (
		<Main className="main">
			<Container className={s.container}>
				<Block className={s.title}>
					<Typography component="h1" className={s.title40}>40</Typography>
					<Typography component="h1" className={s.title4}>4</Typography>
				</Block>
				<Button type="secondary" className={s.goHome} onClick={() => navigate(ROUTES.HOME)}>
					{t.goHome}
				</Button>
			</Container>
		</Main>
	);
}
