import { Block } from '~/asmlib/components/blocks/Block';
import { Contacts } from '~pages/Home/sections/Contacts/Contacts';
import { HardSkills } from '~pages/Home/sections/HardSkills';
import { Hobbies } from '~pages/Home/sections/Hobbies';
import { Languages } from '~pages/Home/sections/Languages';
import { SoftSkills } from '~pages/Home/sections/SoftSkills';

import s from './RightColumn.module.scss';

export function RightColumn() {
	return (
		<Block
			className={s.RightColumn}
			grid={{ lg: 5, xl: 4, xx: 3 }}
		>
			<Contacts />
			<HardSkills />
			<SoftSkills />
			<Languages />
			<Hobbies />
		</Block>
	);
}
