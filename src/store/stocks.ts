import { getSortedRemovedStocks } from './../helpers/stocks';
import { RematchDispatch } from '@rematch/core';
import { StockSections } from '../constants/stocks';
import { IStock } from '../constants/types';
import { getNormalizedSortedStocks, getSortedAddedStocks } from '../helpers/stocks';

interface IStockState {
  loading: boolean;
  stocks: IStock[];
  initialStocks: IStock[];
}
const stocks = {
  state: {
    loading: false,
    stocks: [],
    initialStocks: [],
  } as IStockState,

  reducers: {
    setLoadingTrue: (state: IStockState) => {
      return { ...state, loading: true };
    },
    setLoadingFalse: (state: IStockState) => {
      return { ...state, loading: false };
    },
    loadedStocks: (state: IStockState, payload: IStock[]) => {
      return { ...state, loading: false, stocks: payload, initialStocks: payload };
    },
    addFavoriteToggled: (state: IStockState, payload: IStock) => {
      return {
        ...state,
        stocks: state.stocks.map((stock) =>
          stock.id === payload.id ? { ...stock, isFavorite: payload.isFavorite } : { ...stock },
        ),
      };
    },
    removeFavoriteToggled: (state: IStockState, payload: IStock) => {
      return {
        ...state,
        stocks: state.stocks.map((stock) =>
          stock.id === payload.id ? { ...stock, isFavorite: payload.isFavorite } : { ...stock },
        ),
      };
    },
    setNewStocks: (state: IStockState, payload: IStock[]) => {
      return { ...state, stocks: payload };
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    // Populate stocks state with option (it could be a API call)
    load() {
      dispatch.stocks.setLoadingTrue();
      const sortedStocks = getNormalizedSortedStocks(StockSections);

      setTimeout(() => {
        dispatch.stocks.loadedStocks(sortedStocks);
        dispatch.stocks.setLoadingFalse();
      }, 1500);
    },
    // sort stocks when a stock is being marked as favorite
    sortAdded(stocks: IStock[]) {
      const newSortedStocks = getSortedAddedStocks(stocks);

      dispatch.stocks.setNewStocks(newSortedStocks);
    },
    // sort stocks when a stock is being unmarked as favorite
    sortRemoved(stocks: IStock[]) {
      const newSortedStocks = getSortedRemovedStocks(stocks);

      dispatch.stocks.setNewStocks(newSortedStocks);
    },
  }),
};

export default stocks;
