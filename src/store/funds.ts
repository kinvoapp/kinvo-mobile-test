import { api } from './../services/api';
import { RematchDispatch } from '@rematch/core';
import { IFund } from '../constants/types';
import { loadFunds } from '../services/api';
import { FundsSections } from '../constants/funds';

interface IFundsState {
  loading: boolean;
  funds: Array<IFund>;
}

const funds = {
  state: {
    loading: false,
    funds: [],
  } as IFundsState,

  reducers: {
    setLoadingTrue: (state: IFundsState) => {
      return { ...state, loading: true };
    },
    setLoadingFalse: (state: IFundsState) => {
      return { ...state, loading: false };
    },
    loadedFunds: (state: IFundsState, payload: IFund[]) => {
      return { ...state, loading: false, funds: payload };
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    load() {
      dispatch.funds.setLoadingTrue();
      const sortedFunds = FundsSections.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

      setTimeout(() => {
        dispatch.funds.loadedFunds(sortedFunds);
        dispatch.funds.setLoadingFalse();
      }, 1500);
    },
  }),
};

export default funds;
