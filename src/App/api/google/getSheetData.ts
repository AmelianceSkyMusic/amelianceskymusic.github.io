import axios from 'axios';

import { BASE_GOOGLE_SHEET_URL } from './consts';

interface IGetSheetData {
	sheetId: string;
	tqx?: string;
	pageTitle?: string;
	range?: string;
}

export async function getSheetData({ sheetId, tqx = 'out:json', pageTitle = 'sheet', range = undefined }: IGetSheetData) {

	const params: string[] = [];
	if (tqx) params.push(`tqx=${tqx}`);
	if (pageTitle) params.push(`sheet=${pageTitle}`);
	if (range) params.push(`range=${range}`);

	try {
		const response = await axios.get(`${BASE_GOOGLE_SHEET_URL}${sheetId}/gviz/tq?${params.join('&')}`);

		const textData = await response.data;
		const data = JSON.parse(textData.substring(47).slice(0, -2));

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error('AXIOS-ERROR (getSpreadsheetData):', error);
		} else {
			console.error('ERROR (getSpreadsheetData):', error);
		}
	}
}

// const response = await fetch('https://docs.google.com/spreadsheets/d/11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0/gviz/tq?tqx=out:json&sheet=base&range=');
// const textData = await response.text();
// const data = JSON.parse(textData.substring(47).slice(0, -2));
// return data;
