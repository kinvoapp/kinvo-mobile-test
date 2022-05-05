export interface IBoxItem {
    title: string,
    type: string,
    value: number,
    closed?: number
    status?: number
}

export type BoxItemStyle = {
    closedType?: number;
    signValue?: "positive" | "negative"
}