import React from "react"
import { Container } from "./styles"
import { IScreenHeader } from "./types"
import BackIcon from "../../assets/icons/back.svg";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { StackParametersList } from "../../routes/StackParameters"
import { useNavigation } from "@react-navigation/native"

export default function ScreenHeader(props: IScreenHeader) {
    type navigationType = NativeStackNavigationProp<StackParametersList>;
    const navigation = useNavigation<navigationType>();

    return (
        <Container>
            <BackIcon onPress={() => { navigation.navigate("Challenge") }} width={25} height={25} />

        </Container>
    )
}