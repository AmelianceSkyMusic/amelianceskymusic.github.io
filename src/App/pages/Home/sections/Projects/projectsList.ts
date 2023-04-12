import stageZero2048 from '~assets/img/2048.png';
import stageTwoAsyncRace from '~assets/img/async-race.png';
import petAW from '~assets/img/aw.png';
import stageOneCssMemSlider from '~assets/img/css-mem-slider.png';
import cv from '~assets/img/cv.png';
import stageZeroCv from '~assets/img/cv-rss.png';
import stageTwoEngle from '~assets/img/engle.png';
import stageZeroMovieApp from '~assets/img/movie-app.png';
import stageTwoNewsPortal from '~assets/img/news-portal.png';
import stageTwoOnlineStore from '~assets/img/online-store.png';
import stageReactPMA from '~assets/img/pma.png';
import stageZeroPortfolio from '~assets/img/portfolio.png';
import stageReactRSS from '~assets/img/react.png';
import stageOneShelter from '~assets/img/shelter.png';
import stageZeroVideoPlayer from '~assets/img/videoplayer.png';
import stageOneVirtualKeyboard from '~assets/img/virtual-keyboard.png';
import wisay from '~assets/img/wisay.png';

interface ProjectListItem {codeLink: string;deployLink: string;videoLink: string;previewImg: string;

}

export const projectsList: ProjectListItem[] = [{
	codeLink: 'https://github.com/AmelianceSkyMusic/rs-cv',
	deployLink: 'https://amelianceskymusic.github.io/rs-cv',
	videoLink: '',
	previewImg: stageZeroCv,
}, {
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/portfolio',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/portfolio',
	videoLink: '',
	previewImg: stageZeroPortfolio,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/videoplayer',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/videoplayer',
	videoLink: '',
	previewImg: stageZeroVideoPlayer,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/random-game',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/random-game',
	videoLink: '',
	previewImg: stageZero2048,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFEPRESCHOOL/tree/movie-app',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFEPRESCHOOL/movie-app',
	videoLink: '',
	previewImg: stageZeroMovieApp,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/shelter',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/shelter/pages/main',
	videoLink: '',
	previewImg: stageOneShelter,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/virtual-keyboard/tree/virtual-keyboard',
	deployLink: 'https://amelianceskymusic.github.io/virtual-keyboard',
	videoLink: '',
	previewImg: stageOneVirtualKeyboard,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/cssMemSlider/tree/gh-pages',
	deployLink: 'https://amelianceskymusic.github.io/cssMemSlider/cssMemSlider',
	videoLink: '',
	previewImg: stageOneCssMemSlider,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/online-store-jest',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/online-store',
	videoLink: '',
	previewImg: stageTwoOnlineStore,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/migration-newip-to-ts--dev',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/migration-newip-to-ts',
	videoLink: '',
	previewImg: stageTwoNewsPortal,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-JSFE2022Q1/tree/async-race',
	deployLink: 'https://amelianceskymusic.github.io/amelianceskymusic-JSFE2022Q1/async-race',
	videoLink: '',
	previewImg: stageTwoAsyncRace,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/engle',
	deployLink: 'https://amelianceskymusic.github.io/engle',
	videoLink: '',
	previewImg: stageTwoEngle,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic-REACT2022Q3',
	deployLink: 'https://rss-react-06-redux.netlify.app',
	videoLink: '',
	previewImg: stageReactRSS,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/project-management-app',
	deployLink: '',
	videoLink: '',
	previewImg: stageReactPMA,
},	{
	codeLink: 'https://github.com/amelianceworship/amelianceworship.github.io',
	deployLink: '',
	videoLink: '',
	previewImg: petAW,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/amelianceskymusic.github.io',
	deployLink: 'https://amelianceskymusic.github.io',
	videoLink: '',
	previewImg: cv,
},	{
	codeLink: 'https://github.com/AmelianceSkyMusic/genesis-front-end-school',
	deployLink: 'https://genesis-front-end-school.netlify.app',
	videoLink: 'https://streamable.com/8r6nfa',
	previewImg: wisay,
},
].reverse();
