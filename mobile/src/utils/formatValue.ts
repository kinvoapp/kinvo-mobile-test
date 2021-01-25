import Intl from 'intl';

const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value)
    .replace('R$', '');

export default formatValue;
