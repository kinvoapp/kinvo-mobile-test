export const formatMoney = numero => {
  var numero = numero.toFixed(2).split(".");
  numero[0] = numero[0].split(/(?=(?:...)*$)/).join(".");
  return "R$" + numero.join(",");
};

export const formatProfitability = profitability => {
  return (
    profitability
      .toFixed(2)
      .toString()
      .replace(".", ",") + "%"
  );
};
