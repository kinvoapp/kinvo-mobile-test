export type Stock = {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  isFavorite?: boolean;
};

export type ApiResponse<T> = {
  success: boolean;
  data: T[];
  error?: {
    name: string;
    message: string;
    header: string;
  } | null;
};
