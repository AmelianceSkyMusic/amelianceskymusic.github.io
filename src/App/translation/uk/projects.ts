import { en } from '../en';

export const projects = {
	title: 'ПРОЄКТИ',
	sections: {
		deliVery: {
			title: 'Deli-Very',
			subTitle: 'Next.js, Mantine, Zustand, Firebase, ESLint, Prettier, Lodash/merge, TypeScript',
			descriptions: [
				'Міні-сервіс для замовлення доставки продуктів',
			],
		},
		rssuabot: {
			title: 'RS School Telegram bot',
			subTitle: 'GrammY, TypeScript, Zustand, Dotenv, ESLint, Nodemon',
			descriptions: [
				'Бот чату RS School | Ukraine (The Rolling Scopes School)',
				'Телеграм бот для допомоги модерація чату, публікації анонсів, довідки',
			],
			deployComment: '',
		},
		amelianceScripts: {
			title: 'Ameliance Scripts',
			subTitle: 'TypeScript',
			descriptions: [
				'Власна колекція часто використовуваних скриптів',
			],
			deployComment: '',
		},
		amelianceUI: {
			title: en.projects.sections.amelianceUI.title,
			subTitle: en.projects.sections.amelianceUI.subTitle,
			descriptions: [
				'Власна бібліотека React UI компонентів і не тільки',
				'Бібліотека яка пройшла шлях від простої UI бібліотеки на SCSS до бібліотеки React компонентів і містить більше ніж 300 файлів',
				'Бібліотека містить не тільки компоненти, але й сітку, зміну теми, хуки для роботи з темою. Підтримує роботу з React Hook Form',
				'Знаходиться в процесі розробки та адаптації',
			],
			deployComment: '',
		},
		wisay: {
			title: en.projects.sections.wisay.title,
			subTitle: en.projects.sections.wisay.subTitle,
			descriptions: [
				'Кейсове завдання для відбору у фронт-енд школу',
				'Навчальний сайт для проходження курсів. Основним завданням була робота з API Wisay, рендеринг курсів та уроків, пагінація, відтворення відео при наведенні, створення кастомного плеєра для роботи з форматом hls на базі стандартного HTML5-плеєра та збереження прогресу проходження уроків',
			],
			deployComment: '* для перегляду деплою потрібно використати розширення Access-Control-Allow-Origin',
		},
		cv: {
			title: en.projects.sections.cv.title,
			subTitle: en.projects.sections.cv.subTitle,
			descriptions: [
				'Моє CV',
				'Проект був зроблений на React, щоб не зайвий раз попрактикуватися в роботі з React, спробувати щось нове і удосконалити навички',
			],
		},
		petAW: {
			title: en.projects.sections.petAW.title,
			subTitle: en.projects.sections.petAW.subTitle,
			descriptions: [
				'Пет проєкт',
				'Односторінковий додаток для використання між учасниками музичного гурту. Додаток містить список пісень, акордів та чат для спілкування. Функціонал додатку включає можливість створення списку пісень та транспонування акордів',
				'Проект був розпочатий на початку мого навчання на JavaScript, а пізніше переписаний на React. Частина функціоналу знаходиться в процесі перенесення на React',
			],
		},
		stageReactPMA: {
			title: en.projects.sections.stageReactPMA.title,
			subTitle: en.projects.sections.stageReactPMA.subTitle,
			descriptions: [
				'SPA, що допомагає окремій людині в команді або групі розробників досягти своїх цілей',
				'Фінальне завдання курсу React виконувала команда з 3-х осіб. Через відсутність електрики та розбіжності в графіку подачі електроенергії комунікація була поганою та часу було менше ніж у команд не з України',
				'Мій внесок: Тімлід команди, організація роботи та комунікації в команді. UX/UI дизайн додатку. Налаштування проєкту, встановлення пакетів. Створення гайду по налаштуванню IDE та управлінню проєктом для команди з описом всього, що є в проєкті, які бібліотеки використовуються і як ми їх використовуємо. Розробка стану додатка. Налаштування MUI, компонентів MUI, сітки, додавання світлої та темної тем. Верстка: головна сторінка, вхід, реєстрація. Валідація форм',
			],
		},
		stageReactRSS: {
			title: en.projects.sections.stageReactRSS.title,
			subTitle: en.projects.sections.stageReactRSS.subTitle,
			descriptions: [
				'Навчальний SPA-проєкт курсу React, на якому ми практикували свої навички: '
				+ 'класові і функціональні компоненти, '
				+ 'методи життєвого циклу, '
				+ 'React Router DOM, '
				+ 'React Hooks, '
				+ 'React Hook Form, '
				+ 'Стан: useProvider, useReducer; '
				+ 'Redux RTK, '
				+ 'React Testing Library',
			],
		},
		stageTwoEngle: {
			title: en.projects.sections.stageTwoEngle.title,
			subTitle: en.projects.sections.stageTwoEngle.subTitle,
			descriptions: [
				'SPA для вивчення найпопулярніших англійських слів за допомогою двох ігор. Користувачі можуть мати власний обліковий запис, власний словник та статистику',
				'Фінальне завдання курсу JavaScript/Front end виконувала команда з 3-х осіб. Хоча курс був присвячений JavaScript, з дозволу ментора ми вперше спробували попрацювати з React та Redux. Було дуже складно, але ми це зробили',
				'Мій внесок: Тімлід команди, організація роботи та комунікації в команді. UX/UI дизайн додатку. Налаштування проєкту, встановлення пакетів. Розробка стору додатка. Створення ui компонентів. Зміна тем. Реалізація гри "Аудіо Виклик". Верстка: хедер, футер, гра "Аудіо Виклик", домашня сторінка',
			],
			deployComment: '* потрібно дочекатися, поки бекенд прокинеться* ',
		},
		stageTwoAsyncRace: {
			title: en.projects.sections.stageTwoAsyncRace.title,
			subTitle: en.projects.sections.stageTwoAsyncRace.subTitle,
			descriptions: [
				'Перший проєкт на TypeScript, де ми поглиблено навчалися працювати з Rest API. Тут я спробував декомпозиційний підхід. Також спробував попрацювати з Lottie анімацією та API Web Animations',
			],
			deployComment: '* деплой працює тільки з локальним сервером https://github.com/mikhama/async-race-api',
		},
		stageTwoNewsPortal: {
			title: en.projects.sections.stageTwoNewsPortal.title,
			subTitle: en.projects.sections.stageTwoNewsPortal.subTitle,
			descriptions: [
				'Сайт з новинами. Завдання полягало в тому, щоб переписати код, що вже існує з JavaScript на TypeScript. Додатково зробити верстку',
			],
			deployComment: '* працює тільки локально',
		},
		stageTwoOnlineStore: {
			title: en.projects.sections.stageTwoOnlineStore.title,
			subTitle: en.projects.sections.stageTwoOnlineStore.subTitle,
			descriptions: [
				'Міні-магазин. Робота з фільтрами. Робота з MVC',
			],
			deployComment: '* можливий конфлікт localStorage. В разі чого очистити localStorage',
		},
		stageOneCssMemSlider: {
			title: en.projects.sections.stageOneCssMemSlider.title,
			subTitle: en.projects.sections.stageOneCssMemSlider.subTitle,
			descriptions: [
				'Поглиблена робота з CSS',
			],
		},
		stageOneVirtualKeyboard: {
			title: en.projects.sections.stageOneVirtualKeyboard.title,
			subTitle: en.projects.sections.stageOneVirtualKeyboard.subTitle,
			descriptions: [
				'Робота з подіями клавіатури. Робота зі звуком, створення різних тем',
			],
		},
		stageOneShelter: {
			title: en.projects.sections.stageOneShelter.title,
			subTitle: en.projects.sections.stageOneShelter.subTitle,
			descriptions: [
				'Верстка багатосторінкового сайту. Створення нескінченної каруселі та пагінації',
			],
		},
		stageZeroMovieApp: {
			title: en.projects.sections.stageZeroMovieApp.title,
			subTitle: en.projects.sections.stageZeroMovieApp.subTitle,
			descriptions: [
				'Робота з Rest API. Розширена робота з елементами інтерфейсу',
			],
		},
		stageZero2048: {
			title: en.projects.sections.stageZero2048.title,
			subTitle: en.projects.sections.stageZero2048.subTitle,
			descriptions: [
				'Робота з алгоритмами. Зміна теми. Створення ігрового стану',
			],
		},
		stageZeroVideoPlayer: {
			title: en.projects.sections.stageZeroVideoPlayer.title,
			subTitle: en.projects.sections.stageZeroVideoPlayer.subTitle,
			descriptions: [
				'Кастомізація стандартних елементів. Робота зі звуком',
			],
		},
		stageZeroPortfolio: {
			title: en.projects.sections.stageZeroPortfolio.title,
			subTitle: en.projects.sections.stageZeroPortfolio.subTitle,
			descriptions: [
				'Верстка односторінкового сайту. Робота з даними. Змінити мову. Змінити тему',
			],
		},
		stageZeroCv: {
			title: en.projects.sections.stageZeroCv.title,
			subTitle: en.projects.sections.stageZeroCv.subTitle,
			descriptions: [
				'Верстка з використанням HTML CSS',
			],
		},
	},
};
