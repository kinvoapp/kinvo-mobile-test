type style = 'percent' | 'currency';

export const currencyBRL = (value: number, style: style) =>
  value.toLocaleString('pt-BR', { currency: 'BRL', style });
