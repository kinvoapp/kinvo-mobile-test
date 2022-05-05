export interface IFunds {
    title: string,
    subtitle: string,
    icon: string,
    id: number,
    name: string,
    type: string,
    minimumValue: number,
    rating: number,
    profitability: number,
    status: number
}

export type FundsStyle = {
    verticalAlign?: "top" | "center"
}