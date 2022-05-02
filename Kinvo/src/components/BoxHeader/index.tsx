import React from "react"
import { ClosedStatusView, Container, ContainerLeft, ContainerRight, FavoriteContainer, NewStatusView, StatusText, Subtitle, Title } from "./styles"
import { IBoxHeader } from "./types"


export default function BoxHeader(props: IBoxHeader) {
    return (
        <Container>
            <ContainerLeft>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle.toUpperCase()}</Subtitle>
            </ContainerLeft>
            <ContainerRight>

                <FavoriteContainer>
                    {props.favorite ? props.favorite : null}
                </FavoriteContainer>

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