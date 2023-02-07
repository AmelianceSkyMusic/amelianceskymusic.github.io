import { Block } from '~/asmlib/components/blocks/Block';
import { Projects } from '~pages/Home/sections/Projects/Projects';

import s from './BottomColumn.module.scss';

export function BottomColumn() {
	return (
		<Block
			className={s.BottomColumn}
			grid={{ lg: 12, xl: 11, xx: 10 }}
		>
			<Projects />
		</Block>
	);
}
