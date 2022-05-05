import React from "react"
import { Text } from "react-native"
import { Container, ContainerCenter, ContainerLeft, ContainerRight, StatusText, StatusView, Subtitle, Title } from "./styles"
import { IMenuBox } from "./types"


export default function MenuBox(props: IMenuBox) {
    return (
        <Container onPress={props.onPress}>
            <ContainerLeft>
                <Text>{props.icon}</Text>
            </ContainerLeft>

            <ContainerCenter>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </ContainerCenter>

            <ContainerRight>
                {props.status === 1 ?
                    <StatusView>
                        <StatusText>Novo</StatusText>
                    </StatusView> :
                    null}
            </ContainerRight>
        </Container>
    )
}