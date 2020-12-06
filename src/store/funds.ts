import { api } from './../services/api';
import { sortFunds } from './../helpers/funds';
import { RematchDispatch } from '@rematch/core';
import { IFund } from '../constants/types';
import { loadFunds } from '../services/api';
import { FundsSections } from '../constants/funds';

interface FundsState {
  loading: boolean;
  funds: Array<IFund>;
}

const funds = {
  state: {
    loading: true,
    funds: [],
  } as FundsState,

  reducers: {
    loadedFunds: (state: FundsState, payload: IFund[]) => {
      return { ...state, loading: false, funds: payload };
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    load() {
      const sortedFunds = FundsSections.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      dispatch.funds.loadedFunds(sortedFunds);
    },
  }),
};

export default funds;
