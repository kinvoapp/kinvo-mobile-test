import React from 'react'
import { Container, InvestmentInfoLabel } from './styles'

function InvestmentInfoUnit({ label, isActive = true, children, ...props }) {
	return (
		<Container {...props}>
			<InvestmentInfoLabel isActive={isActive}>
				{label + ':'}
			</InvestmentInfoLabel>
			{children}
		</Container>
	)
}

export default InvestmentInfoUnit
