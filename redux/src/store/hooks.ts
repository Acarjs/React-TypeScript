import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';

import { AppDispatch, RootState } from './store.ts';

type DisPatchFunction = () => AppDispatch;

export const useCartDispatch: DisPatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
