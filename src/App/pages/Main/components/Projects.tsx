import stageZeroCv from '../../../../assets/img/cv.png';
import stageZeroPortfolio from '../../../../assets/img/portfolio.png';
import stageZeroVideoPlayer from '../../../../assets/img/videoplayer.png';
import stageZero2048 from '../../../../assets/img/2048.png';
import stageZeroMovieApp from '../../../../assets/img/movie-app.png';

import stageOneShelter from '../../../../assets/img/shelter.png';
import stageOneVirtualKeyboard from '../../../../assets/img/virtual-keyboard.png';
import stageOneCssMemSlider from '../../../../assets/img/css-mem-slider.png';

import stageTwoOnlineStore from '../../../../assets/img/online-store.png';
import stageTwoNewsPortal from '../../../../assets/img/news-portal.png';
import stageTwoAsyncRace from '../../../../assets/img/async-race.png';
import stageTwoEngle from '../../../../assets/img/engle.png';


export function Projects() {
	return (
		<section id="projects" className="projects section">
			<h2 className="h2">PROJECTS</h2>
			<p className="p2">* If error clean Local Storage!</p>

			<div className='section-item'>
				<div className="section-item__container">
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/engle/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageTwoEngle} alt="Engle" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Engle</h3>
								<a href="https://github.com/AmelianceSkyMusic/engle" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/async-race/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageTwoAsyncRace} alt="Async Race" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Async Race</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/async-race" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/migration-newip-to-ts/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageTwoNewsPortal} alt="News Portal" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">News Portal</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/migration-newip-to-ts--dev" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/online-store/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageTwoOnlineStore} alt="Online Store" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Online Store</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/online-store-jest" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/cssMemSlider/cssMemSlider/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageOneCssMemSlider} alt="Css Mem Slider" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Css Mem Slider</h3>
								<a href="https://github.com/AmelianceSkyMusic/cssMemSlider/tree/gh-pages" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/virtual-keyboard/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageOneVirtualKeyboard} alt="Virtual Keyboard" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Virtual Keyboard</h3>
								<a href="https://github.com/AmelianceSkyMusic/virtual-keyboard/tree/virtual-keyboard" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/shelter/pages/main/" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageOneShelter} alt="Shelter" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Shelter</h3>
								<a href="https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/shelter" target="_blank" className="icon-sm icon--github" rel="noreferrer"></a>
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
					<a className="section-item__img-container" href="https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/movie-app" target="_blank" rel="noreferrer">
						<img className="section-item__img" src={stageZeroMovieApp} alt="Movie App" />
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
						<img className="section-item__img" src={stageZero2048} alt="Game 2048" />
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
						<img className="section-item__img" src={stageZeroVideoPlayer} alt="Custom Video Player" />
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
						<img className="section-item__img" src={stageZeroPortfolio} alt="Photographers Portfolio" />
					</a>
					<div className="section-item__text-content">
						<div className="section-item__title-block">
							<div className="section-item__title">
								<h3 className="h3">Photographer&apos;s Portfolio</h3>
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
						<img className="section-item__img" src={stageZeroCv} alt="CV" />
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
