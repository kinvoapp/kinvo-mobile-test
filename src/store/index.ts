import { configureStore } from '@reduxjs/toolkit';
import { fundsSlice } from './funds/slice';
import { pensionSlice } from './pension/slice';

export const store = configureStore({
  reducer: {
    funds: fundsSlice.reducer,
    pensions: pensionSlice.reducer,
  },
});
