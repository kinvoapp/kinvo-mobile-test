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

export const getProfitabilityType = (profitability: number) => {
  if (profitability > 0) {
    return 'positive';
  }

  if (profitability < 0) {
    return 'negative';
  }

  return 'default';
};

export const sortListByName = (list: Pension[] | Fund[] | Stock[]) => {
  return list.sort((a, b) => a.name.localeCompare(b.name));
};
