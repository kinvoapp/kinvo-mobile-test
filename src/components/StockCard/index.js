import React from 'react'
import { Text } from 'react-native'
import InvestmentCard from '../InvestmentCard'
import {
	MINIMUM_VALUE,
	PROFITABILITY
} from '../../utils/consts/investmentInfoLabels'
import { MinimumValueUnit, ProfitabilityUnit } from './styles'

function StockCard({ stock, isFirstChild }) {
	return (
		<InvestmentCard
			title={stock.name}
			subtitle={stock.ticker}
			isFirstChild={isFirstChild}>
			<MinimumValueUnit label={MINIMUM_VALUE}>
				<Text>R$ 10,00</Text>
			</MinimumValueUnit>
			<ProfitabilityUnit label={PROFITABILITY}>
				<Text>R$ 10,00</Text>
			</ProfitabilityUnit>
		</InvestmentCard>
	)
}

export default StockCard
