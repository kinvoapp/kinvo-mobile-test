
export const colors = (idColor) => {
    let color;
  switch (idColor) {
    case 1:   // FUNDS
      color = '#008DCB';
      break;

    case 2:   // PENSION
      color = '#D5A82C';
      break;

    case 3:   // POST_FIXED_INCOME
      color = '#94E5D2';
      break;

    case 4:   // TREASURY_DIRECT
      color = '#86B2DE';
      break;

    case 5:   // SAVINGS
      color = '#5AAAD5';
      break;

    case 6:   // PRE_FIXED_INCOME
      color = '#38BFA0';
      break;

    case 7:   // BITCOIN
      color = '#3E71B9';
      break;

    case 8:   // STOCK
      color = '#4C309B';
      break;

    case 9:   // DEBENTURES
      color = '#86B2DE';
      break;

    case 10:   // CURRENCY
      color = '#B9B42C';
      break;

    case 11:   // FII
      color = '#4141D5';
      break;

    case 12:   // BDR
      color = '#9390E5';
      break;

    default:
      color = '#000'
  }

  return color;
};