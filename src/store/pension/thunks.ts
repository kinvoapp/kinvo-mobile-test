import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPension } from '~services/client';

export const pensionAsync = createAsyncThunk(
  'getPension/fetchByPension',
  async () => {
    const data = await getPension();
    console.log(data);

    return data;
  },
);
