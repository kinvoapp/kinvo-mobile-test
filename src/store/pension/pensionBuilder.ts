import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { PensionData } from '../../types/client';
import { pensionAsync } from '../pension/thunks';

export const pensionAsyncBuilder = (
  builder: ActionReducerMapBuilder<PensionData>,
) => {
  builder
    .addCase(pensionAsync.fulfilled, (state, action) => {
      console.log('Payload :', action.payload.data);
      state.pensions = action.payload.data;
      state.loading = false;
    })
    .addCase(pensionAsync.pending, state => {
      state.loading = true;
    })
    .addCase(pensionAsync.rejected, state => {
      state.loading = false;
    });
};
