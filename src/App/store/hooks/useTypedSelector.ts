import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from '../rootReducer';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
