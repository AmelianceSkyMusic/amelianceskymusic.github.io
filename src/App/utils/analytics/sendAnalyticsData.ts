import { analyticsApi } from './analyticsApi';
import { getClientInfo } from './getClientInfo';

const GOOGLE_ANALYTICS = import.meta.env.VITE_GOOGLE_ANALYTICS;

export async function sendAnalyticsData() {
	const response = await getClientInfo();

	const {
		ip,
		page,
		time,
		language,
		languages,
		browser,
		mobile,
		screenHeight,
		screenWidth,
		viewportHeight,
		viewportWidth,
	} = response;

	await analyticsApi.appsscript.postTitledColumnsDataByTitles({
		spreadsheetId: GOOGLE_ANALYTICS,
		titlesParams: {
			ip,
			page,
			time,
			language,
			languages: languages.join(' | '),
			browser: browser.name,
			version: browser.version,
			mobile,
			screenHeight,
			screenWidth,
			viewportHeight,
			viewportWidth,
		},
	});
}
