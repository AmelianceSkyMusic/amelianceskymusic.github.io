import stageZero2048 from '~assets/img/2048.png';
import stageTwoAsyncRace from '~assets/img/async-race.png';
import stageOneCssMemSlider from '~assets/img/css-mem-slider.png';
import stageZeroCv from '~assets/img/cv.png';
import stageTwoEngle from '~assets/img/engle.png';
import stageZeroMovieApp from '~assets/img/movie-app.png';
import stageTwoNewsPortal from '~assets/img/news-portal.png';
import stageTwoOnlineStore from '~assets/img/online-store.png';
import stageZeroPortfolio from '~assets/img/portfolio.png';
import stageOneShelter from '~assets/img/shelter.png';
import stageZeroVideoPlayer from '~assets/img/videoplayer.png';
import stageOneVirtualKeyboard from '~assets/img/virtual-keyboard.png';

interface ProjectListItem {
	codeLink: string;
	example: {
		deployLink: string;
		previewImg: string;
	};
}

export const projectsList: ProjectListItem[] = [
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/rs-cv',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/rs-cv',
			previewImg: stageZeroCv,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/portfolio',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/portfolio',
			previewImg: stageZeroPortfolio,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/videoplayer',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/videoplayer',
			previewImg: stageZeroVideoPlayer,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/random-game',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/random-game',
			previewImg: stageZero2048,
		},
	},
	{
		codeLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/movie-app',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/movie-app',
			previewImg: stageZeroMovieApp,
		},
	},
	{
		codeLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/shelter/pages/main/',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/cssMemSlider/cssMemSlider/',
			previewImg: stageOneShelter,
		},
	},
	{
		codeLink: 'https://amelianceskymusic.github.io/virtual-keyboard/',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/cssMemSlider/cssMemSlider/',
			previewImg: stageOneVirtualKeyboard,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/cssMemSlider/tree/gh-pages',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/cssMemSlider/cssMemSlider/',
			previewImg: stageOneCssMemSlider,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/online-store-jest',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/online-store/',
			previewImg: stageTwoOnlineStore,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/migration-newip-to-ts--dev',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/migration-newip-to-ts/',
			previewImg: stageTwoNewsPortal,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/async-race',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/async-race/',
			previewImg: stageTwoAsyncRace,
		},
	},
	{
		codeLink: 'https://github.com/AmelianceSkyMusic/engle',
		example: {
			deployLink: 'https://amelianceskymusic.github.io/engle/',
			previewImg: stageTwoEngle,
		},
	},
].reverse();
