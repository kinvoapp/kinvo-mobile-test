export function formatMoneyLocale(price: number): string {
  const priceFormarted = price.toFixed(2).split('.');
  priceFormarted[0] = `R$ ${priceFormarted[0]
    .split(/(?=(?:...)*$)/)
    .join('.')}`;
  return priceFormarted.join(',');
}
