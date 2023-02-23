import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { appSlice } from './slices/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppStore = typeof store;
export const useAppStore = () => useStore<AppStore>();

export default store;
