export interface IBoxContainer {
    children: React.ReactNode,
    status?: number
}

export type BoxContainerStyle = {
    closedType?: number;
}