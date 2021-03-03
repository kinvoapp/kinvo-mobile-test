import React from 'react'
import { Container, Title, Subtitle, HorizontalDivider } from './styles'

function InvestmentCard({
	title,
	subtitle,
	CardTopRight,
	isActive = true,
	isFirstChild,
	children
}) {
	return (
		<Container isActive={isActive} isFirstChild={isFirstChild}>
			{CardTopRight}
			<Title CardTopRight={CardTopRight} isActive={isActive}>
				{title}
			</Title>
			<Subtitle isActive={isActive}>{subtitle}</Subtitle>
			<HorizontalDivider />
			{children}
		</Container>
	)
}

export default InvestmentCard
