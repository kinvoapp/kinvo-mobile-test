import { IFund } from '../constants/types';

export const sortFunds = (funds: IFund[]) => {
  return funds.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};
