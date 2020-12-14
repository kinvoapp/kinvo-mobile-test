export const ADD_ALL_FUNDS = 'ADD_ALL_FUNDS';
export const REQUEST_ERROR_FUND = 'REQUEST_ERROR_FUND';
const INITIAL_STATE = [];

function listFundReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ERROR_FUND:
      return state={ error: true };
    case ADD_ALL_FUNDS:
      return state=action.value;
    default:
      return state;
  }
}

export default listFundReducer;
