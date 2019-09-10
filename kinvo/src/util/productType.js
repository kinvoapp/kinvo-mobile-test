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

  static styles = {
    1: {
      name: "Fundo",
      color: colors.funds
    },
    2: {
      name: "Previdência",
      color: colors.pension
    },
    3: {
      name: "Renda Pós-fixada",
      color: colors.postFixedIncome
    },
    4: {
      name: "Tesouro Direto",
      color: colors.treasureDirect
    },
    5: {
      name: "Poupança",
      color: colors.savings
    },
    6: {
      name: "Renda Pré-fixada",
      color: colors.preFixedIncome
    },
    7: {
      name: "Bitcoin",
      color: colors.bitcoin
    },
    8: {
      name: "Ações",
      color: colors.stock
    },
    9: {
      name: "Debêntures",
      color: colors.debentures
    },
    10: {
      name: "Moeda",
      color: colors.currency
    },
    11: {
      name: "FII",
      color: colors.fii
    },
    12: {
      name: "BDR",
      color: colors.bdr
    }
  };

  static PRODUCT_TYPES_SUBJECT_TO_APPLICATION = [
    ProductType.FUNDS,
    ProductType.TREASURY_DIRECT,
    ProductType.PENSION,
    ProductType.SAVINGS,
    ProductType.BITCOIN,
    ProductType.STOCK,
    ProductType.FII,
    ProductType.BDR,
    ProductType.DEBENTURES,
    ProductType.CURRENCY,
    ProductType.CUSTOM
  ];

  static getColor(productTypeId) {
    const { color } = this.styles[productTypeId];
    return color;
  }

  static getName(productTypeId) {
    const { name } = this.styles[productTypeId];
    return name;
  }
}
