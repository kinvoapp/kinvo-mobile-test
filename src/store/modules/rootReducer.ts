import { combineReducers } from 'redux';
import search from './search/reducer';
import loading from './loading/reducer';

export default combineReducers({
  search,
  loading,
})