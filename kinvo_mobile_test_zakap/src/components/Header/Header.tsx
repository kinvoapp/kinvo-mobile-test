import { View, Text } from "react-native"
import * as S from "./Header.style"

interface HeaderProps {
    title: string,
    isBackButton: boolean
}

export const Header = ({title, isBackButton} : HeaderProps) => {
    
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
} 