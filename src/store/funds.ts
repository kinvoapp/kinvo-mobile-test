import { RematchDispatch } from '@rematch/core';
import { IFund } from '../constants/types';
import { FundsSections } from '../constants/funds';
import { sortFunds } from '../helpers/funds';

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
    // load funds data into funds state
    load() {
      dispatch.funds.setLoadingTrue();
      const sortedFunds = sortFunds(FundsSections);

      setTimeout(() => {
        dispatch.funds.loadedFunds(sortedFunds);
        dispatch.funds.setLoadingFalse();
      }, 1500);
    },
  }),
};

export default funds;
