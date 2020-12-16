import { RematchDispatch } from '@rematch/core';
import { getNormalizedSortedStocks } from '../../repositories/stocks';

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
      console.log(state, payload);
      return {
        ...state,
        loading: false,
        stocks: payload,
        initialStocks: payload,
      };
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
      console.log(newSortedStocks);
    },
  }),
};

export default stocks;
