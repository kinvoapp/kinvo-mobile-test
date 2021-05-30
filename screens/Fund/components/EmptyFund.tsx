import React from 'react'
import {EmptyListContainer, EmptyListText} from "../../../styles"

const EmptyFund = () => {
    return (
        <EmptyListContainer>
            <EmptyListText>Nenhum fundo foi encontrado.</EmptyListText>
        </EmptyListContainer>
    )
}

export default EmptyFund