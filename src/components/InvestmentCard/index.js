import React from 'react'
import {
	Container,
	CardTopRightContainer,
	Title,
	Subtitle,
	HorizontalDivider
} from './styles'

function InvestmentCard({
	title,
	subtitle,
	CardTopRight,
	CardTopRightPosition,
	isActive = true,
	isFirstChild,
	children
}) {
	return (
		<Container isActive={isActive} isFirstChild={isFirstChild}>
			<CardTopRightContainer
				top={CardTopRightPosition?.top}
				end={CardTopRightPosition?.end}>
				{CardTopRight ? <CardTopRight /> : null}
			</CardTopRightContainer>
			<Title isActive={isActive}>{title}</Title>
			<Subtitle isActive={isActive}>{subtitle}</Subtitle>
			<HorizontalDivider />
			{children}
		</Container>
	)
}

export default InvestmentCard
