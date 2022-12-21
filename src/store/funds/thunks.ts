import { createAsyncThunk } from '@reduxjs/toolkit';

import { getFunds } from '~services/client';

export const fundsAsync = createAsyncThunk(
  'getFunds/fetchByFunds',
  async () => {
    const data = await getFunds();

    return data;
  },
);
