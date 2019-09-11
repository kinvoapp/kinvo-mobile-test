import React from "react";
import ProductType from "../../../../util/productType";
import { formatMoney, formatProfitability } from "../../../../util/formatter";
import Presentational from "./presentational";

formatItem = item => {
  productTypeId = item.productTypeId;
  productName = item.productName;
  financialInstitutionName = item.financialInstitutionName;
  equity = formatMoney(item.equity);
  profitability = formatProfitability(item.profitability);
  color = ProductType.getColor(item.productTypeId);

  const formattedItem = {
    productTypeId,
    productName,
    financialInstitutionName,
    equity,
    profitability,
    color
  };

  return formattedItem;
};

listProductItem = props => {
  const { item } = props;

  const formattedItem = formatItem(item);
  return React.createElement(Presentational, {
    formattedItem
  });
};

export default listProductItem;
