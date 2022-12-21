import { createSlice } from '@reduxjs/toolkit';
import { fundsAsyncBuilder } from './fundsBuilder';
import { fundsInitialState } from './initialState';

export const fundsSlice = createSlice({
  name: 'funds',
  initialState: fundsInitialState,
  reducers: {},
  extraReducers: builder => {
    fundsAsyncBuilder(builder);
  },
});
