// STOCKS

export interface IBeforeStock {
  id: number;
  name: string;
  ticket: string;
  minimumValue: number;
  profitability: number;
}

export interface IStock {
  id: number;
  name: string;
  ticket: string;
  minimumValue: number;
  profitability: number;
  isFavorite: boolean;
}
