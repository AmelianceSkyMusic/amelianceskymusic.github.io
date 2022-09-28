import { NavLink } from 'react-router-dom';

export function Navigation() {
	function getClass(isActive: boolean) {
		return isActive ? 'link navigation__item active' : 'link navigation__item';
	}
	return (
		<nav className="navigation col-10">
			<a href="#summary" className="h4">SUMMARY</a>
			<a href="#contacts" className="h4">CONTACTS</a>
			<a href="#experience" className="h4">EXPERIENCE</a>
			<a href="#softskills" className="h4">SOFT SKILLS</a>
			<a href="#hardskills" className="h4">HARD SKILLS</a>
			<a href="#projects" className="h4">PROJECTS</a>
			<a href="#hobbies" className="h4">HOBBIES</a>
		</nav>
	);
}
