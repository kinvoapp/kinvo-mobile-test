import React from "react"
import { IBoxContainer } from "./types"
import { Container } from "./styles"


export default function BoxContainer(props: IBoxContainer) {
    return (
        <Container closedType={props.status}>
            {props.children}
        </Container>
    )
}