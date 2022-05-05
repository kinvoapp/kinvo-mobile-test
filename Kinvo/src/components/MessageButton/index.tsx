import React from "react"
import { ButtonContainer, ButtonText, } from "./styles"
import { IMessageButton } from "./types"


export default function MessageButton(props: IMessageButton) {
    return (
        <ButtonContainer onPress={props.onPress}>
            <ButtonText>
                {
                    props.type === "tryAgain" ?
                        "TENTAR NOVAMENTE" :
                        props.title
                }
            </ButtonText>
        </ButtonContainer>
    )
}