export interface SearchState {
  data: Products[]
}

export interface Products {

  portfolioProductId: number,
  productName: string,
  financialInstitutionName: string,
  equity: number,
  profitability: number,
  productTypeId: number,
}



