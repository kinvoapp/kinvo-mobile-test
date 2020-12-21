import { init, RematchDispatch, RematchRootState } from '@rematch/core';

import stocks from './modules/stocks';
import pension from './modules/pension';

const models = {
  stocks,
  pension,
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;
