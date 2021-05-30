export interface StockProps {
  id: number;
  name: string;
  ticker: string;
  minimumValue: string;
  profitability: string;
  isFavorite: boolean;
  changeFavorite?: (stockId: number) => void;
}
