export const returnCurrencyValue = (value: number) => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const returnPercentageValue = (value: number) => {
  return (value / 100).toLocaleString('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
  });
};
