export interface ProfitProps{
    profitability: number,
}

export interface RatingProps{
    rating: number,
    quantity : number,
    customColor?: string | null,
}

export interface WisheProps {
    isFavorite: boolean
}

export interface StarIconProps{
    type: string,
}

export interface LabelProps{
    text: string,
    color?:string | null,
}

export interface LabelContainerProps{
    color?: string | null
}