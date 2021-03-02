import React from 'react'
import { Container, Title, Subtitle, HorizontalDivider } from './styles'

function InvestmentCard({
	investmentId,
	title,
	subtitle,
	CardTopRight,
	isActive = true,
	isFirstChild,
	children
}) {
	return (
		<Container isActive={isActive} isFirstChild={isFirstChild}>
			{CardTopRight ? <CardTopRight investmentId={investmentId} /> : null}
			<Title isActive={isActive}>{title}</Title>
			<Subtitle isActive={isActive}>{subtitle}</Subtitle>
			<HorizontalDivider />
			{children}
		</Container>
	)
}

export default InvestmentCard
