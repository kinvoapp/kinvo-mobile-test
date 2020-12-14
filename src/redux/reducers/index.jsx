import { combineReducers } from 'redux';
import listStockReducer from './stock';
import listFundReducer from './fund';
import listPensionReducer from './pension';

/*
* Every function on my redux do the same thing but i preferred to have, one state o every response.
*/

const rootReducer = combineReducers({ listStockReducer, listFundReducer, listPensionReducer });

export default rootReducer;
