import { Filter, IPension } from '../store/modules/pension/types';

export const sortPensions = (pensions: IPension[]) => {
  return pensions.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};
