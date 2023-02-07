import { Block } from '~/asmlib/components/blocks/Block';
import { Contacts } from '~pages/Home/sections/Contacts/Contacts';
import { Education } from '~pages/Home/sections/Education';
import { Experience } from '~pages/Home/sections/Experience';
import { HardSkills } from '~pages/Home/sections/HardSkills';
import { Heading } from '~pages/Home/sections/Heading/Heading';
import { Hobbies } from '~pages/Home/sections/Hobbies';
import { Languages } from '~pages/Home/sections/Languages';
import { Projects } from '~pages/Home/sections/Projects/Projects';
import { SoftSkills } from '~pages/Home/sections/SoftSkills';

import s from './SingleColumn.module.scss';

export function SingleColumn() {
	return (
		<Block
			className={s.SingleColumn}
			grid={{ md: 12 }}
		>
			<Heading />
			<Contacts />
			<Experience />
			<Education />
			<Projects />
			<SoftSkills />
			<HardSkills />
			<Languages />
			<Hobbies />
		</Block>
	);
}
