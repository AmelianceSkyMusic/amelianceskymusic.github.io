import { useDispatch } from 'react-redux';
// import { AnyAction } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { TRootState } from '../rootReducer';
import { store } from '../store';

// export const useTypedDispatch:
// () => ThunkDispatch<TRootState, unknown, AnyAction> = useDispatch;

export type TTypedDispatch = typeof store.dispatch

export const useTypedDispatch: () => TTypedDispatch = useDispatch;
