import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import appReducer, { name as appSliceName } from './slices/appSlice';

const reducer = combineReducers({
  [appSliceName]: appReducer,
});

export const rootReducer = (state: RootState, action: AnyAction) => {
  return reducer(state, action);
};

export type RootState = ReturnType<typeof reducer>;

export default reducer;
