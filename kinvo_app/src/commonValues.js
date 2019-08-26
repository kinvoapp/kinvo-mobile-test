import { Dimensions } from 'react-native';

export const SWIDTH = Dimensions.get('window').width;
export const SHEIGHT = Dimensions.get('window').height;
export const FUNDS = { id: 1, color: '#008DCB' };
export const PENSION = { id: 2, color: '#D5A82C' };
export const POST_FIXED_INCOME = { id: 3, color: '#94E5D2' };
export const TREASURY_DIRECT = { id: 4, color: '#86B2DE' };
export const SAVINGS = { id: 5, color: '#5AAAD5' };
export const PRE_FIXED_INCOME = { id: 6, color: '#38BFA0' };
export const BITCOIN = { id: 7, color: '#3E71B9' };
export const STOCK = { id: 8, color: '#4C309B' };
export const DEBENTURES = { id: 9, color: '#86B2DE' };
export const CURRENCY = { id: 10, color: '#B9B42C' };
export const FII = { id: 11, color: '#4141D5' };
export const BDR = { id: 12, color: '#9390E5' };
export const CommonStyles = {
  fontBlack: 'SF-Pro-Display-Black',
  fontBold: 'SF-Pro-Display-Bold',
  fontMedium: 'SF-Pro-Display-Medium',
  fontSemibold: 'SF-Pro-Display-Semibold',
  backGroundColor: '#F5F8FA',
  selectedColor: '#0DD1E3',
  separator: '#CCCFD1',
  fontColor: '#707B81',
};
export const API_URI = 'https://e9a02505-3276-4fee-aede-c7023dfb9034.mock.pstmn.io/getProducts';

export const maskMoney = (number) => {
  const money = `${number}`.split('.');
  let frente = money[0];
  let cent = '';
  if (money[1]) {
    const test = money[1].split('');
    if (test[1]) {
      [frente, cent] = money;
    } else {
      cent = `${money[1]}0`;
    }
  } else {
    cent = '00';
  }
  return `${frente},${cent}`;
};
