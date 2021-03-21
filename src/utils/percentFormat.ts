import numeral from 'numeral';
import 'numeral/locales';

export function percentFormat(value: number) {
  numeral.locale('pt-br');
  return `${numeral(value).format('0.00')}%`;
}
