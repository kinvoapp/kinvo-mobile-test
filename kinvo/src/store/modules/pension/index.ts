import { RematchDispatch } from '@rematch/core';

import { IPension } from './types';

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

    loadedPensions: (state: IPensionState, payload: IPension[]) => {},
  },
};

export default pension;
