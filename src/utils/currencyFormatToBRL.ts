import numeral from 'numeral';

export function currencyFormatToBRL(value: number) {
  return `R$ ${numeral(value).format('0.00')}`;
}
