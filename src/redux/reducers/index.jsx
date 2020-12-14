import { combineReducers } from 'redux';
import listStockReducer from './stock';
import listFundReducer from './fund';
import listPensionReducer from './pension';

const rootReducer = combineReducers({ listStockReducer, listFundReducer, listPensionReducer });

export default rootReducer;
