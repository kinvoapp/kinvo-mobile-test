import { createStore } from 'redux';
import { Loading } from './modules/loading/types';
import { Error } from './modules/error/types';
import rootReducer from './modules/rootReducer';
import { SearchState } from './modules/search/types';

export interface State {
  search: SearchState
  loading: Loading
  err: Error
}

const store = createStore(rootReducer);

export default store;