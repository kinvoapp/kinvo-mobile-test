import { GestureResponderEvent } from "react-native";

export interface IFilterButton {
        title: string,
        status: boolean;
        onPress: (event: GestureResponderEvent) => void
}

export type FilterButtonStyle = {
        status: boolean;
}