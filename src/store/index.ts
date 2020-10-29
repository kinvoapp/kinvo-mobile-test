import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { SearchState } from './modules/search/types';

export interface State {
  search: SearchState
}

const store = createStore(rootReducer);

export default store;