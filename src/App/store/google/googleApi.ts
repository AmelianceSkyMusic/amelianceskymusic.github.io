import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { queries } from '@testing-library/react';

const sheetID = '11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0';
const sheetTitle = 'base';
const sheetRange = '';

const url = 'spreadsheets/d/' + sheetID +
	'/gviz/tq?tqx=out:json&sheet=' + sheetTitle + '&range=' + sheetRange;

export const googleApi = createApi({
	reducerPath: 'google/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://docs.google.com/'
	}),
	endpoints: build => ({
		spreadSheets: build.query<any, string>({
			query: (string: string) => ({
				url: 'spreadsheets/d/11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0/gviz/tq',
				params: {
					tqx: 'out:json',
					sheet: 'base',
					range: string,
				}
			})
		})
	})
});

export const { useSpreadSheetsQuery } = googleApi;




// this.state = {
// 	sheetID: '11IF6n311xG3ycdE_mOQaZizL7NFzeynvFu2ni1sghQ0',
// 	sheetTitle: 'base',
// 	sheetRange: '',
// 	get url() {
// 		return 'https://docs.google.com/spreadsheets/d/' + this.sheetID +
// 		'/gviz/tq?tqx=out:json&sheet=' + this.sheetTitle + '&range=' + this.sheetRange;
// 	}
// };
