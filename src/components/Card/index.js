import React from 'react'
import { Container } from './styles'

function Card({ style, children }) {
	return <Container style={style}>{children}</Container>
}

export default Card
