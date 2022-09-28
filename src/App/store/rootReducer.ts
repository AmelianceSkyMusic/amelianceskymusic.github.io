import { combineReducers } from '@reduxjs/toolkit';
import { chordlistReducer } from './slices/chordlist';
import { songlistReducer } from './slices/songlist';

export const rootReducer = combineReducers({
	chordlist: chordlistReducer,
	songlist: songlistReducer
});

export type TRootState = ReturnType<typeof rootReducer>
