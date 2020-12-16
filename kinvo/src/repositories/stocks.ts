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
