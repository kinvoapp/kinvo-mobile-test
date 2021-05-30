import React from 'react'
import {EmptyListContainer, EmptyListText} from "../../../styles"

const EmptyFilter = () => {
    return (
        <EmptyListContainer>
            <EmptyListText>Nenhum resultado foi encontrado para os filtros selecionados.</EmptyListText>
        </EmptyListContainer>
    )
}

export default EmptyFilter