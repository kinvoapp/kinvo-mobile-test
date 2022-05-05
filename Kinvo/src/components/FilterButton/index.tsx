import React from "react"
import { TouchableOpacity } from "react-native"
import { Container, Text } from "./styles"
import { IFilterButton } from "./types"


export default function FilterButton(props: IFilterButton) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Container status={props.status}>
                <Text status={props.status}>{props.title}</Text>
            </Container>
        </TouchableOpacity>
    )
}