import { GestureResponderEvent } from "react-native"

export interface IMenuBox {
    title: string,
    subtitle: string,
    icon: any,
    status?: number
    onPress: (event: GestureResponderEvent) => void
}