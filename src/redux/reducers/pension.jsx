export const ADD_ALL_PENSIONS = 'ADD_ALL_PENSIONS';
export const REQUEST_ERROR_PENSION = 'REQUEST_ERROR_PENSION';
const INITIAL_STATE = [];

function listPensionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ERROR_PENSION:
      return state={ error: true };
    case ADD_ALL_PENSIONS:
      return state=action.value;
    default:
      return state;
  }
}

export default listPensionReducer;
