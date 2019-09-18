import colors from "../styles/colors";

export default class RegisterType {
  static APPLICATION = 1;
  static WITHDRAWN = 2;
  static NEW_PRODUCT = 3;
  static CONNECT = 4;



  static LIST = [
    {
      id: ProductType.FUNDS,
      name: "Aplicação",
      color: colors.application
    },
     {
      id: ProductType.PENSION,
      name: "Retirada",
      color: colors.withdrawn
    },
    {
      id: ProductType.POST_FIXED_INCOME,
      name: "Novo Produto",
      color: colors.newProduct
    },
    {
      id: ProductType.TREASURY_DIRECT,
      name: "Conectar",
      color: colors.connect
    }    
  ];


  static get(id) { 

    const registerObj = RegisterType.LIST.find(register => register.id === id);
    return registerObj;
  }

  static getColor(id) { 
    registerObj = this.get(id)
    return registerObj.color;
  }
 
}
