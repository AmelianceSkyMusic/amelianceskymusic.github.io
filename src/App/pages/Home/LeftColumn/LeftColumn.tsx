import { Block } from '~/asmlib/components/blocks/Block';
import { Education } from '~pages/Home/sections/Education';
import { Experience } from '~pages/Home/sections/Experience';
import { Heading } from '~pages/Home/sections/Heading/Heading';

import s from './LeftColumn.module.scss';

export function LeftColumn() {
	return (
		<Block
			className={s.LeftColumn}
			grid={{ lg: 7, xl: 7, xx: 7 }}
		>
			<Heading />
			<Experience />
			<Education />
		</Block>
	);
}
