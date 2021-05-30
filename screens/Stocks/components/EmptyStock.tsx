import React from 'react'
import {EmptyListContainer, EmptyListText} from "../../../styles"

const EmptyStock = () => {
    return (
        <EmptyListContainer>
            <EmptyListText>Nenhuma ação foi encontrada.</EmptyListText>
        </EmptyListContainer>
    )
}

export default EmptyStock