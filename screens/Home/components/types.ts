import {ReactElement} from 'react'
import { GestureResponderEvent } from 'react-native';
import { SvgProps } from "react-native-svg";

export interface NavigationCardProps{
    logo: ReactElement,
    title: string,
    subtitle: string,
    navigationHandler: (path: string) => void,
}