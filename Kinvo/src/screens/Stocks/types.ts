export interface IStocks {
    id: number,
    name: string,
    ticker: string,
    minimumValue: number,
    profitability: number,
    favorite?: boolean
}

export type StocksStyle = {
    verticalAlign?: "top" | "center"
}