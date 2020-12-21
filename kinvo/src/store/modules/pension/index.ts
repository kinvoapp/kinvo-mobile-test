import { RematchDispatch } from '@rematch/core';

import { sortPensions } from '../../../repositories/pension';
import api from '../../../services/api';

import { IPension, Filter, Item } from './types';

interface IPensionState {
  loading: boolean;
  pensions: IPension[];
  initialPensions: IPension[];
}

const pension = {
  state: {
    loading: false,
    pensions: [],
    initialPensions: [],
  } as IPensionState,

  reducers: {
    setLoadingTrue: (state: IPensionState) => {
      return { ...state, loading: true };
    },

    setLoadingFalse: (state: IPensionState) => {
      return { ...state, loading: false };
    },

    loadedPensions: (state: IPensionState, payload: IPension[]) => {
      return { ...state, pensions: payload, initialPensions: payload };
    },
  },

  effects: (dispatch: RematchDispatch) => ({
    async load() {
      dispatch.pension.setLoadingTrue();

      const response = await api.get('pension');

      const sortedPensions = sortPensions(response.data.data);

      dispatch.pension.loadedPensions(sortedPensions);
      dispatch.pension.setLoadingFalse();
    },
  }),
};

export default pension;
