import { init, RematchDispatch, RematchRootState } from '@rematch/core';

import stocks from './modules/stocks';

const models = {
  stocks,
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;
