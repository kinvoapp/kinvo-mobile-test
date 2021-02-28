import React from 'react'
import { Container, Content, TextContainer, Title, Subtitle } from './styles'

function SectionCard({ Icon, title, subtitle, isLastChild }) {
	return (
		<Container isLastChild={isLastChild}>
			<Content>
				{Icon ? <Icon /> : null}
				<TextContainer>
					<Title>{title}</Title>
					<Subtitle>{subtitle}</Subtitle>
				</TextContainer>
			</Content>
		</Container>
	)
}

export default SectionCard
