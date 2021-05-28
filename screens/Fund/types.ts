export interface FundProps{
    id: number,
    name: string,
    type: string,
    minimumValue: string,
    rating: number,
    profitability: string,
    status: 0 | 1 | 2,
}

export interface FundCardContainerProps{
    backgroundColor? : string | null,
    opacity?: number
}