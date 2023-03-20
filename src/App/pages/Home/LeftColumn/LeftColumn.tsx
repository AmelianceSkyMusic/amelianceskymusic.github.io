import { Block } from '~/ameliance-ui/components/blocks/Block';

import { Education } from '../sections/Education';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects/Projects';
import { Summary } from '../sections/Summary/Summary';

import s from './LeftColumn.module.scss';

export function LeftColumn() {
	return (
		<Block
			className={s.LeftColumn}
			grid={{ lg: 7, xl: 7, xx: 7 }}
		>
			<Summary />
			<Experience />
			<Education />
			<Projects />
		</Block>
	);
}
