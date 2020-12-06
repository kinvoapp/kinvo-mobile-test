import { getCorrectPensionFilter, sortPensions } from './../helpers/pension';
import { Filter, IPension } from './../constants/types';
import { RematchDispatch } from '@rematch/core';
import { PensionSections } from '../constants/pension';
import { Item } from '../constants/types';

interface IPensionState {
  loading: boolean;
  pensions: IPension[];
  initalPensions: IPension[];
}

const pension = {
  state: {
    loading: false,
    pensions: [],
    initalPensions: [],
  } as IPensionState,
  reducers: {
    setLoadingTrue: (state: IPensionState) => {
      return { ...state, loading: true };
    },
    setLoadingFalse: (state: IPensionState) => {
      return { ...state, loading: false };
    },
    loadedPensions: (state: IPensionState, payload: IPension[]) => {
      return { ...state, pensions: payload, initalPensions: payload };
    },
    setFilter: (state: IPensionState, payload: Item[]) => {
      const newFilters = payload.reduce((acc, item) => {
        let key = Object.keys(item).toString();
        let value = Object.values(item);
        return Object.assign(acc, { [key]: value[0] });
      }, {}) as Filter;

      const newPensionArr = state.initalPensions.filter((pension) =>
        getCorrectPensionFilter(pension, newFilters),
      );

      return Object.keys(newFilters).length === 0
        ? { ...state, pensions: state.initalPensions }
        : { ...state, pensions: newPensionArr };
    },
  },
  effects: (dispatch: RematchDispatch) => ({
    // load sorted data to pensions state
    async load() {
      dispatch.pension.setLoadingTrue();

      const sortedPensions = sortPensions(PensionSections);

      setTimeout(() => {
        dispatch.pension.loadedPensions(sortedPensions);
        dispatch.pension.setLoadingFalse();
      }, 1500);
    },
  }),
};

export default pension;
