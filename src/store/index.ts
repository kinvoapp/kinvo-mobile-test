import { init, RematchDispatch, RematchRootState } from '@rematch/core';

import stocks from './stocks';
import funds from './funds';
import pension from './pension';

const models = {
  stocks,
  funds,
  pension,
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;
