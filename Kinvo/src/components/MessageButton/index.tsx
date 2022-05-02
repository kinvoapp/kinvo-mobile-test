import React from "react"
import { ButtonContainer, ButtonText, } from "./styles"
import { IMessageButton } from "./types"


export default function MessageButton(props: IMessageButton) {
    return (

        <ButtonContainer>
            <ButtonText onPress={() => { }}>{props.title}</ButtonText>
        </ButtonContainer>

    )
}