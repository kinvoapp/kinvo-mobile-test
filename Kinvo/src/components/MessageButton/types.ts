import { GestureResponderEvent } from "react-native"

export interface IMessageButton {
    title?: string,
    type?: string
    onPress?: (event: GestureResponderEvent) => void
}