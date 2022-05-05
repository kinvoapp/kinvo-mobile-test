import React from "react"
import { ClosedStatusView, Container, ContainerLeft, ContainerRight, NewStatusView, StatusText, Subtitle, Title } from "./styles"
import { IBoxHeader } from "./types"


export default function BoxHeader(props: IBoxHeader) {
    return (
        <Container>
            <ContainerLeft>
                <Title closedType={props.status}>{props.title}</Title>
                <Subtitle closedType={props.status}>{props.subtitle.toUpperCase()}</Subtitle>
            </ContainerLeft>
            <ContainerRight>
                {props.favorite ? props.favorite : null}

                {props.status === 1 ?
                    <NewStatusView>
                        <StatusText>Novo</StatusText>
                    </NewStatusView>
                    :
                    props.status === 2 ?
                        <ClosedStatusView>
                            <StatusText>Fechado</StatusText>
                        </ClosedStatusView> :
                        null}
            </ContainerRight>
        </Container>
    )
}