import numeral from 'numeral';
import 'numeral/locales';

export function currencyFormatToBRL(value: number) {
  numeral.locale('pt-br');
  return `R$ ${numeral(value).format('0.00')}`;
}
