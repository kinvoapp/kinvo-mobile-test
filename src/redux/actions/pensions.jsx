import { ADD_ALL_PENSIONS, REQUEST_ERROR_PENSION } from '../reducers/pension';

export const addAllPensions = (value) => {
  if(value === undefined) return { type: REQUEST_ERROR_PENSION }
  return { type: ADD_ALL_PENSIONS, value }
};
