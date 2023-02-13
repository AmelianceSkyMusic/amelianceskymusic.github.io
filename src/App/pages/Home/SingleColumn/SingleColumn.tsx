import { Block } from '~/asmlib/components/blocks/Block';

import { Contacts } from '../sections/Contacts/Contacts';
import { Education } from '../sections/Education';
import { Experience } from '../sections/Experience';
import { HardSkills } from '../sections/HardSkills';
import { Hobbies } from '../sections/Hobbies';
import { Languages } from '../sections/Languages';
import { Projects } from '../sections/Projects/Projects';
import { SoftSkills } from '../sections/SoftSkills';
import { Summary } from '../sections/Summary/Summary';

import s from './SingleColumn.module.scss';

export function SingleColumn() {
	return (
		<Block
			className={s.SingleColumn}
			grid={{ md: 12 }}
		>
			<Summary />
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
