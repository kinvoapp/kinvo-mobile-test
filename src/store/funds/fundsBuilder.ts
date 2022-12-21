import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { FundsData } from '../../types/client';
import { fundsAsync } from '../funds/thunks';

export const fundsAsyncBuilder = (
  builder: ActionReducerMapBuilder<FundsData>,
) => {
  builder
    .addCase(fundsAsync.fulfilled, (state, action) => {
      state.funds = action.payload.data;
      state.loading = false;
    })
    .addCase(fundsAsync.pending, state => {
      state.loading = true;
    })
    .addCase(fundsAsync.rejected, state => {
      state.loading = false;
    });
};
