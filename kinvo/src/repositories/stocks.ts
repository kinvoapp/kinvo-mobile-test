import { IBeforeStock, IStock } from '../store/modules/types';

export const getNormalizedSortedStocks = (stocks: IBeforeStock[]): IStock[] => {
  return stocks
    .reduce((acc, item) => {
      const obj = item;
      const newPropertie = { isFavorite: false };
      const newObj = Object.assign(obj, newPropertie);
      acc.push(newObj);
      return acc;
    }, [] as IStock[])
    .sort(function (a, b) {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
};

export const getSortedAddedStocks = (stocks: IStock[]) => {
  return stocks.sort(function (a, b) {
    return a.isFavorite === b.isFavorite ? 0 : a.isFavorite ? -1 : 1;
  });
};

export const getSortedRemovedStocks = (stocks: IStock[]) => {
  return stocks.sort(function (a, b) {
    if (a.isFavorite === b.isFavorite) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    }
    return a.isFavorite < b.isFavorite ? 1 : -1;
  });
};
