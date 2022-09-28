import { IGoogleSheetsData } from '../interfaces/IGoogleSheetsData';

export function convertDataFromTableWithFirstRowHeading(data: IGoogleSheetsData) {
	const dataObj: { [key: string]: string[] } = {};
	const table = data.table;
	const maxLengthOfColumn: number = table.rows[0].c.length;
	for (let i = 0; i < maxLengthOfColumn; i++) {
		const colDate = [];
		for (let j = 1; j < table.rows.length; j++) {
			if (table.rows[j].c[i]) {
				colDate[j - 1] = table.rows[j].c[i].v ?? '';
			} else {
				colDate[j] = '';
			}
		}
		dataObj[table.rows[0].c[i].v] = colDate;
	}
	return dataObj;
}
