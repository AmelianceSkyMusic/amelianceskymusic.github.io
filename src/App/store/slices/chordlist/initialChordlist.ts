import { chordlistData } from './chordlistData';

function chordlistInit() {
	if (localStorage.getItem('chordlist') !== null) {
		const chordlistLocalStorage = JSON.parse(localStorage.getItem('chordlist') as string);
		return {
			chordlist: chordlistLocalStorage,
		};
	}

	return {
		chordlist: chordlistData,
	};

}

export const initialChordlist = chordlistInit();
