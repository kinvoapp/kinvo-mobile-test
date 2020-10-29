import { createStore } from 'redux';
import { Loading } from './modules/loading/types';

import rootReducer from './modules/rootReducer';
import { SearchState } from './modules/search/types';

export interface State {
  search: SearchState
  loading: Loading
}

const store = createStore(rootReducer);

export default store;