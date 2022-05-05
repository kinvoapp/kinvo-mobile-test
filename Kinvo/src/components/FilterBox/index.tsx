import React from "react"
import { Container } from "./styles"
import { IFilterBox } from "./types"


export default function FilterBox(props: IFilterBox) {
    return (
        <Container>
            {props.children}
        </Container>
    )
}