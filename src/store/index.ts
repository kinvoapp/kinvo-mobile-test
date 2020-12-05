import { init } from '@rematch/core';

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
