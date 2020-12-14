import { ADD_ALL_FUNDS, REQUEST_ERROR_FUND } from '../reducers/fund';

export const addAllFunds = (value) => {
  if(value === undefined) return { type: REQUEST_ERROR_FUND }
  return { type: ADD_ALL_FUNDS, value }
};
