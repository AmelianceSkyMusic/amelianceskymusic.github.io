import stageZeroCv from '../../../../assets/img/cv.png';
import stageZeroPortfolio from '../../../../assets/img/portfolio.png';
import stageZeroVideoPlayer from '../../../../assets/img/videoplayer.png';
import stageZero2048 from '../../../../assets/img/2048.png';
import stageZeroMovieApp from '../../../../assets/img/movie-app.png';

export function Projects() {
	return (
		<section id="projects" className="projects section">
			<h2 className="h2">PROJECTS</h2>

			<div className='section-item'>
				<div className="section-item__container">
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/movie-app" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageZeroMovieApp} alt="movie-app" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Movie App</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/movie-app" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
							</div>
							<p className="p2">react</p>
						</div>
						<div className="section-item__description-block">
							<p className="p1">Web design, brandbook, logo</p>
						</div>
					</div>
				</div>
			</div>

			<div className='section-item'>
				<div className="section-item__container">
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/random-game" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageZero2048} alt="2048" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Game 2048</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/random-game" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
							</div>
							<p className="p2">react</p>
						</div>
						<div className="section-item__description-block">
							<p className="p1">Web design, brandbook, logo</p>
						</div>
					</div>
				</div>
			</div>

			<div className='section-item'>
				<div className="section-item__container">
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/videoplayer" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageZeroVideoPlayer} alt="video-player" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Custom Video Player</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/videoplayer" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
							</div>
							<p className="p2">react</p>
						</div>
						<div className="section-item__description-block">
							<p className="p1">Web design, brandbook, logo</p>
						</div>
					</div>
				</div>
			</div>

			<div className='section-item'>
				<div className="section-item__container">
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/portfolio" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageZeroPortfolio} alt="portfolio" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Portfolio</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/portfolio" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
							</div>
							<p className="p2">react</p>
						</div>
						<div className="section-item__description-block">
							<p className="p1">Web design, brandbook, logo</p>
						</div>
					</div>
				</div>
			</div>

			<div className='section-item'>
				<div className="section-item__container">
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/rs-cv" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageZeroCv} alt="cv" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">CV</h3>
								<a href="https://github.com/AmelianceSkyMusic/rs-cv" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
							</div>
							<p className="p2">react</p>
						</div>
						<div className="section-item__description-block">
							<p className="p1">Web design, brandbook, logo</p>
						</div>
					</div>
				</div>
			</div>

		</section>
	);
}
