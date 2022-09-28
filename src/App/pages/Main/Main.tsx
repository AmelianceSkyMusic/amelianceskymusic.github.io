import './Main.scss';
import { Footer } from '../../layouts/Footer';
import { Header } from '../../layouts/Header';
import { Heading } from './components/Heading';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Hobbies } from './components/Hobbies';
import { Contacts } from './components/Contacts';
import { SoftSkills } from './components/SoftSkills';
import { HardSkills } from './components/HardSkills';
import { Languages } from './components/Languages';
import { useMediaQuery } from 'react-responsive';
import { CONSTS } from '../../consts';
import { StickyButton } from '../../components/StickyButton';

export function Main() {
	const isScreenXl = useMediaQuery({ query: `(min-width: ${CONSTS.BREAKPOINTS.SCREEN_XL})` });
	return (
		<div className="root__main-page">
			<section className="main section-item">
				{isScreenXl
					?
					<div className="container row">
						<div className="primary-content col-7 col-xl-8 col-lg-12">
							<Heading />
							<Experience />
							<Education />
							<Projects />
						</div>
						<div className="secondary-content col-3 col-xl-4 col-lg-12">
							<Contacts />
							<SoftSkills />
							<HardSkills />
							<Languages />
							<Hobbies />
						</div>
					</div>
					:
					<div className="container row">
						<div className="primary-content col-7 col-xl-8 col-lg-12">
							<Heading />
							<Contacts />
							<Experience />
							<Education />
							<Projects />
						</div>
						<div className="secondary-content col-3 col-xl-4 col-lg-12">
							<SoftSkills />
							<HardSkills />
							<Languages />
							<Hobbies />
						</div>
					</div>
				}

			</section>
			<StickyButton />
			{isScreenXl && <Header />}
			<Footer />
		</div>
	);
}
