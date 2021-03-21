interface Icard {
  title: string;
  subtitle: string;
  tag?: Itag;
}

interface Itag {
  color?: string;
  name?: string;
}

interface IgetStocks {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
  favorite?: boolean;
}

interface IgetFunds extends IgetStocks {
  type: string;
  rating: number;
  status: 0 | 1 | 2;
}
interface IgetPensions extends IgetStocks {
  type: string;
  tax: number;
  redemptionTerm: number;
  status: 0 | 1 | 2;
}
