import { createSlice } from '@reduxjs/toolkit';
import { initialChordlist } from './initialChordlist';

const chordlistSlice = createSlice({
	name: 'songlist',
	initialState: initialChordlist,
	reducers: {
		addSongName(store, action) {
			console.log('store', store);
			console.log('action', action);

			store.chordlist.push(action.payload);
		},
		removeSongName(store) {
			store.chordlist.pop();
		}
	}
});

export const {
	addSongName,
	removeSongName
} = chordlistSlice.actions;

export const chordlistReducer = chordlistSlice.reducer;
