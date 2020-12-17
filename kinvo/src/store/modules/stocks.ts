import { RematchDispatch } from '@rematch/core';
import {
  getNormalizedSortedStocks,
  getSortedAddedStocks,
  getSortedRemovedStocks,
} from '../../repositories/stocks';

import api from '../../services/api';

import { IStock } from './types';

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
      return {
        ...state,
        loading: false,
        stocks: payload,
        initialStocks: payload,
      };
    },

    addFavoriteToggled: (state: IStockState, payload: IStock) => {
      return {
        ...state,
        stocks: state.stocks.map(stock =>
          stock.id === payload.id
            ? { ...stock, isFavorite: payload.isFavorite }
            : { ...stock },
        ),
      };
    },

    removeFavoriteToggled: (state: IStockState, payload: IStock) => {
      console.log(state, payload, 'Remove Rematch');
      return {
        ...state,
        stocks: state.stocks.map(stock =>
          stock.id === payload.id
            ? { ...stock, isFavorite: payload.isFavorite }
            : { ...stock },
        ),
      };
    },

    setNewStocks: (state: IStockState, payload: IStock[]) => {
      return { ...state, stock: payload };
    },
  },

  effects: (dispatch: RematchDispatch) => ({
    // Populate stocks state with option (it could be a API call)
    async load() {
      dispatch.stocks.setLoadingTrue();
      const response = await api.get('stocks');

      const newSortedStocks = getNormalizedSortedStocks(response.data.data);

      dispatch.stocks.loadedStocks(newSortedStocks);
      dispatch.stocks.setLoadingFalse();
      // console.log(newSortedStocks);
    },

    // sort stocks when a stock is being marked as favorite
    sortAdded(stocks: IStock[]) {
      const newSortedStocks = getSortedAddedStocks(stocks);

      dispatch.stocks.setNewStocks(newSortedStocks);
    },

    sortRemoved(stocks: IStock[]) {
      const newSortedStocks = getSortedRemovedStocks(stocks);

      console.log(newSortedStocks);

      dispatch.stocks.setNewStocks(newSortedStocks);
    },
  }),
};

export default stocks;
