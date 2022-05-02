import React from "react"
import { Container } from "./styles"
import { IScreenContainer } from "./types"

export default function ScreenContainer(props: IScreenContainer) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}