import React from "react"
import { Text } from "react-native"
import { Container, ContainerCenter, ContainerLeft, ContainerRight, NewStatusView, StatusText, Subtitle, Title } from "./styles"
import { IMenuBox } from "./types"


export default function MenuBox(props: IMenuBox) {
    return (
        <Container>
            <ContainerLeft>
                <Text>{props.icon}</Text>
            </ContainerLeft>

            <ContainerCenter>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
            </ContainerCenter>

            <ContainerRight>
                {props.status === 1 ?
                    <NewStatusView>
                        <StatusText>Novo</StatusText>
                    </NewStatusView> :
                    null}
            </ContainerRight>
        </Container>
    )
}