import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPension } from '~services/client';

export const pensionAsync = createAsyncThunk(
  'getPension/fetchByPension',
  async () => await getPension(),
);
