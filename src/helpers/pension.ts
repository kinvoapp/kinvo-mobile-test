import { Filter, IPension } from './../constants/types';

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
