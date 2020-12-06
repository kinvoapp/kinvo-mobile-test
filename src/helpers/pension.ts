import pension from '../store/pension';
import { Filter, IPension } from './../constants/types';

export const sortPensions = (pensions: IPension[]) => {
  return pensions.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};

export const getCorrectPensionFilter = (pension: IPension, filters: Filter) => {
  const hasTax: boolean = Object.keys(filters).includes('tax');
  const hasMinimumValue: boolean = Object.keys(filters).includes('minimumValue');
  const hasRedemptionTerm: boolean = Object.keys(filters).includes('redemptionTerm');

  if (hasTax && !hasMinimumValue && !hasRedemptionTerm) {
    return pension.tax === filters.tax;
  } else if (!hasTax && hasMinimumValue && !hasRedemptionTerm) {
    return pension.minimumValue === filters.minimumValue;
  } else if (!hasTax && !hasMinimumValue && hasRedemptionTerm) {
    return pension.redemptionTerm === filters.redemptionTerm;
  } else if (hasTax && hasMinimumValue && !hasRedemptionTerm) {
    return pension.tax === filters.tax && pension.minimumValue === filters.minimumValue;
  } else if (hasTax && !hasMinimumValue && hasRedemptionTerm) {
    return pension.tax === filters.tax && pension.redemptionTerm === filters.redemptionTerm;
  } else if (!hasTax && hasMinimumValue && hasRedemptionTerm) {
    return (
      pension.minimumValue === filters.minimumValue &&
      pension.redemptionTerm === filters.redemptionTerm
    );
  } else if (hasTax && hasMinimumValue && hasRedemptionTerm) {
    return (
      pension.tax === filters.tax &&
      pension.minimumValue === filters.minimumValue &&
      pension.redemptionTerm === filters.redemptionTerm
    );
  } else {
    return;
  }
};
