import { combineReducers } from 'redux';
import search from './search/reducer';
import loading from './loading/reducer';
import err from './error/reducer';


export default combineReducers({
  search,
  loading,
  err
})