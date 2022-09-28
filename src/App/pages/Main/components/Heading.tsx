import photo from '../../../../assets/png/photo.png';

export function Heading() {
	return (
		<section id="heading" className="heading section">
			<div className="heading__title-container">
				{/* <div className='heading__photo-container'> */}
				{/* <img className="heading__photo" src={photo} alt="photo" /> */}
				{/* </div> */}
				<div className='heading__title-block'>
					<h1 className="h1">
						Bobomuratov Rajab
					</h1>
					<h2 className="h2">Junior Front End Developer</h2>
				</div>
			</div>
			<div id="summary" className="section-item__description-block">
				<p className="p1">
					I write code no matter what I do. If I’m writing music, doing design, video, or just doing routine work I write scripts or even entire tools to simplify my work. I like it
				</p>
				<p className="p1">
					I have experience in developing and writing scripts and tools of different complexity in different languages (Javascript: After Effects, Figma, Illustrator, Studio One, Lua: Reaper, AHK: windows automation, etc.)
				</p>
			</div>

		</section>
	);
}
