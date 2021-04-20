export interface AcoesRequestData {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}

export interface AcoesData extends AcoesRequestData {
  favorite: Boolean;
}
