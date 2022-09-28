import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api';
import { initialSonglist } from './initialSonglist';

export const fetchTodos: any = createAsyncThunk(
	'songlist/fetchTodos',
	async function( _, { rejectWithValue }) {
		try {
			const responseData = await api.google.getSheetData({
				sheetId: '16wsDcFtQ7J1nYrlSkEB8KgLp_XpyCdwH-SIi0fuqapc',
				pageTitle: 'Вивчити-зробити'
			});

			const data = api.google.convertors.convertDataFromTableWithFirstRowHeading(responseData);

			return data;
		} catch (error) {
			return rejectWithValue((error as Error).message);
		}
	}
);

const songlistSlice = createSlice({
	name: 'songlist',
	initialState: initialSonglist,
	reducers: {
		addSongName(store, action) {
			store.songlist.push(action.payload);
		},
		removeSongName(store) {
			store.songlist.pop();
		}
	},
	extraReducers: {
		[fetchTodos.pending]: (state) => {
			state.isLoading = true;
			state.isError = null;
		},
		[fetchTodos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.isError = null;
			state.songlist = action.payload;
		},
		[fetchTodos.rejected]: (state, action) => {
			state.isLoading = false;
			state.isError = action.payload;
		},
	}
});

export const {
	addSongName,
	removeSongName
} = songlistSlice.actions;

export const songlistReducer = songlistSlice.reducer;
