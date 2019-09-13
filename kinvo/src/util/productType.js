import colors from "../styles/colors";

export default class ProductType {
  static FUNDS = 1;
  static PENSION = 2;
  static POST_FIXED_INCOME = 3;
  static TREASURY_DIRECT = 4;
  static SAVINGS = 5;
  static PRE_FIXED_INCOME = 6;
  static BITCOIN = 7;
  static STOCK = 8;
  static DEBENTURES = 9;
  static CURRENCY = 10;
  static FII = 11;
  static BDR = 12;

  static LIST = [
    {
      id: ProductType.FUNDS,
      name: "Fundo",
      color: colors.funds
    },
     {
      id: ProductType.PENSION,
      name: "Previdência",
      color: colors.pension
    },
    {
      id: ProductType.POST_FIXED_INCOME,
      name: "Renda Pós-fixada",
      color: colors.postFixedIncome
    },
    {
      id: ProductType.TREASURY_DIRECT,
      name: "Tesouro Direto",
      color: colors.treasureDirect
    },
    {
      id: ProductType.SAVINGS,
      name: "Poupança",
      color: colors.savings
    },
    {
      id: ProductType.PRE_FIXED_INCOME,
      name: "Renda Pré-fixada",
      color: colors.preFixedIncome
    },
    {
      id: ProductType.BITCOIN,
      name: "Bitcoin",
      color: colors.bitcoin
    },
    {
      id: ProductType.STOCK,
      name: "Ações",
      color: colors.stock
    },
    {
      id: ProductType.DEBENTURES,
      name: "Debêntures",
      color: colors.debentures
    },
    {
      id: ProductType.CURRENCY,
      name: "Moeda",
      color: colors.currency
    },
    {
      id: ProductType.FII,
      name: "FII",
      color: colors.fii
    },
    {
      id: ProductType.BDR,
      name: "BDR",
      color: colors.bdr
    }
  ];


  static get(id) { 

    const productObj = ProductType.LIST.find(product => product.id === id);
    return productObj;
  }

  static getColor(id) { 
    productObj = this.get(id)
    return productObj.color;
  }
 
}
