import {
  SET_STOCKS,
  SET_FUNDS,
  SET_PENSIONS
} from "../types";

export function setStocks(stocks){
  return {
    type: SET_STOCKS,
    stocks,
  }
}

export function setFunds(funds){
  return {
    type: SET_FUNDS,
    funds,
  }
}

export function setPensions(pensions){
  return {
    type: SET_PENSIONS,
    pensions,
  }
}