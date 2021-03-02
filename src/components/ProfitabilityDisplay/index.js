import React from 'react'
import { Container, Arrow, ProfitabilityText } from './styles'
import { toBRNumber } from '../../utils/formatNumber'

function ProfitabilityDisplay({ profitability, isActive = true }) {
	return (
		<Container>
			<Arrow profitability={profitability} isActive={isActive} />
			<ProfitabilityText
				profitability={profitability}
				isActive={isActive}>
				{toBRNumber(profitability) + '%'}
			</ProfitabilityText>
		</Container>
	)
}

export default ProfitabilityDisplay
