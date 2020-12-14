export const ADD_ALL_STOCKS = 'ADD_ALL_STOCKS';
export const ADD_STOCK_TO_FAVORITE = 'ADD_STOCK_TO_FAVORITE';
export const REQUEST_ERROR_STOCK = 'REQUEST_ERROR_STOCK';
const INITIAL_STATE = [];

function listStockReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ERROR_STOCK:
      return state={ error: true };
    case ADD_ALL_STOCKS:
      return state=action.value;
    case ADD_STOCK_TO_FAVORITE:
      return state;
    default:
      return state;
  }
}

export default listStockReducer;
