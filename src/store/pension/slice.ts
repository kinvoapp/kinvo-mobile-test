import { createSlice } from '@reduxjs/toolkit';
import { pensionAsyncBuilder } from './pensionBuilder';
import { pensionInitialState } from './initialState';

export const pensionSlice = createSlice({
  name: 'pension',
  initialState: pensionInitialState,
  reducers: {},
  extraReducers: builder => {
    pensionAsyncBuilder(builder);
  },
});
