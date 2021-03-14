import {
  SET_STOCKS,
  SET_FUNDS,
  SET_PENSIONS,
  SET_REQUEST_FAILED,
} from "../types";

const initialState = {
  stocks: [],
  pensions: [],
  funds: [],
  requestFailed: false,
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case SET_STOCKS:
      return {
        ...state,
        stocks: action.stocks,
      };
    case SET_FUNDS:
      return {
        ...state,
        funds: action.funds,
      };
    case SET_PENSIONS:
      return {
        ...state,
        pensions: action.pensions,
      };
    case SET_REQUEST_FAILED:
      return {
        ...state,
        requestFailed: action.requestFailed,
      };
    default:
      return state;
  }
}
