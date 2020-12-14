import { ADD_ALL_STOCKS, ADD_STOCK_TO_FAVORITE, REQUEST_ERROR_STOCK } from '../reducers/stock';

export const addAllStocks = (value) => {
  if(value === undefined) return { type: REQUEST_ERROR }
  return { type: ADD_ALL_STOCKS, value }
};
