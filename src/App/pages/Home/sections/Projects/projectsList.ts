import stageZero2048 from '~assets/img/2048.png';
import amelianceScripts from '~assets/img/ameliance-scripts.png';
import amelianceUI from '~assets/img/amelianceUI.png';
import stageTwoAsyncRace from '~assets/img/async-race.png';
import petAW from '~assets/img/aw.png';
import stageOneCssMemSlider from '~assets/img/css-mem-slider.png';
import cv from '~assets/img/cv.png';
import stageZeroCv from '~assets/img/cv-rss.png';
import deliVery from '~assets/img/deliVery.png';
import stageTwoEngle from '~assets/img/engle.png';
import stageZeroMovieApp from '~assets/img/movie-app.png';
import stageTwoNewsPortal from '~assets/img/news-portal.png';
import stageTwoOnlineStore from '~assets/img/online-store.png';
import stageReactPMA from '~assets/img/pma.png';
import stageZeroPortfolio from '~assets/img/portfolio.png';
import stageReactRSS from '~assets/img/react.png';
import rssuabot from '~assets/img/rssuabot.png';
import stageOneShelter from '~assets/img/shelter.png';
import stageZeroVideoPlayer from '~assets/img/videoplayer.png';
import stageOneVirtualKeyboard from '~assets/img/virtual-keyboard.png';
import wisay from '~assets/img/wisay.png';

interface ProjectListItem {
	name: string;
	imgLink: string;
	codeLink: string;
	deployLink: string;
	videoLink: string;
}

export const projectsList: ProjectListItem[] = [
	{
		name: 'rssuabot',
		imgLink: rssuabot,
		codeLink: 'https://github.com/AmelianceSkyMusic/rssuabot',
		deployLink: '',
		videoLink: '',
	},
	{
		name: 'stageZeroCv',
		imgLink: stageZeroCv,
		codeLink: 'https://github.com/AmelianceSkyMusic/rs-cv',
		deployLink: 'https://amelianceskymusic.github.io/rs-cv',
		videoLink: '',
	},
	{
		name: 'stageZeroPortfolio',
		imgLink: stageZeroPortfolio,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/portfolio',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/portfolio',
		videoLink: '',
	},
	{
		name: 'stageZeroVideoPlayer',
		imgLink: stageZeroVideoPlayer,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/videoplayer',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/videoplayer',
		videoLink: '',
	},
	{
		name: 'stageZero2048',
		imgLink: stageZero2048,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/random-game',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/random-game',
		videoLink: '',
	},
	{
		name: 'stageZeroMovieApp',
		imgLink: stageZeroMovieApp,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/movie-app',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/movie-app',
		videoLink: '',
	},
	{
		name: 'stageOneShelter',
		imgLink: stageOneShelter,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/shelter',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/shelter/pages/main',
		videoLink: '',
	},
	{
		name: 'stageOneVirtualKeyboard',
		imgLink: stageOneVirtualKeyboard,
		codeLink:
			'https://github.com/AmelianceSkyMusic/virtual-keyboard/tree/virtual-keyboard',
		deployLink: 'https://amelianceskymusic.github.io/virtual-keyboard',
		videoLink: '',
	},
	{
		name: 'stageOneCssMemSlider',
		imgLink: stageOneCssMemSlider,
		codeLink:
			'https://github.com/AmelianceSkyMusic/cssMemSlider/tree/gh-pages',
		deployLink:
			'https://amelianceskymusic.github.io/cssMemSlider/cssMemSlider',
		videoLink: '',
	},
	{
		name: 'stageTwoOnlineStore',
		imgLink: stageTwoOnlineStore,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/online-store-jest',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/online-store',
		videoLink: '',
	},
	{
		name: 'stageTwoNewsPortal',
		imgLink: stageTwoNewsPortal,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/migration-newip-to-ts--dev',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/migration-newip-to-ts',
		videoLink: '',
	},
	{
		name: 'stageTwoAsyncRace',
		imgLink: stageTwoAsyncRace,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/async-race',
		deployLink:
			'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/async-race',
		videoLink: 'https://streamable.com/l64118',
	},
	{
		name: 'stageTwoEngle',
		imgLink: stageTwoEngle,
		codeLink: 'https://github.com/AmelianceSkyMusic/engle',
		deployLink: 'https://engle-app.netlify.app',
		videoLink: '',
	},
	{
		name: 'stageReactRSS',
		imgLink: stageReactRSS,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic-REACT2022Q3',
		deployLink: 'https://rss-react-06-redux.netlify.app',
		videoLink: '',
	},
	{
		name: 'stageReactPMA',
		imgLink: stageReactPMA,
		codeLink: 'https://github.com/AmelianceSkyMusic/project-management-app',
		deployLink: '',
		videoLink: '',
	},
	{
		name: 'cv',
		imgLink: cv,
		codeLink:
			'https://github.com/AmelianceSkyMusic/amelianceskymusic.github.io',
		deployLink: 'https://amelianceskymusic.github.io',
		videoLink: '',
	},
	{
		name: 'wisay',
		imgLink: wisay,
		codeLink: 'https://github.com/AmelianceSkyMusic/genesis-front-end-school',
		deployLink: 'https://genesis-front-end-school.netlify.app',
		videoLink: 'https://streamable.com/8r6nfa',
	},
	{
		name: 'deliVery',
		imgLink: deliVery,
		codeLink:
			'https://github.com/AmelianceSkyMusic/eliftech-school-test-task',
		deployLink: 'https://eliftech-school-test-task.vercel.app',
		videoLink: '',
	},
	{
		name: 'amelianceScripts',
		imgLink: amelianceScripts,
		codeLink: 'https://github.com/AmelianceSkyMusic/ameliance-scripts',
		deployLink: '',
		videoLink: '',
	},
	{
		name: 'amelianceUI',
		imgLink: amelianceUI,
		codeLink: 'https://github.com/AmelianceSkyMusic/ameliance-ui',
		deployLink: '',
		videoLink: '',
	},
	{
		name: 'petAW',
		imgLink: petAW,
		codeLink:
			'https://github.com/amelianceworship/amelianceworship.github.io',
		deployLink: 'https://aw-amelianceskymusic.netlify.app/',
		videoLink: '',
	},
].reverse();
