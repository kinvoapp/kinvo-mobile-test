const options = {
  style: 'currency',
  currency: 'BRL',
};

export const currencyBRL = (value: number) =>
  value.toLocaleString('pt-BR', options);

export function formattedMoneyBRL(value: number) {
  return Intl.NumberFormat('pt-BR', options).format(value);
}
