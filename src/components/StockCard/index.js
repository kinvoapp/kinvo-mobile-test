import React from 'react'
import InvestmentCard from '../InvestmentCard'
import MinimumValue from '../MinimumValue'
import ProfitabilityDisplay from '../ProfitabilityDisplay'
import MarkAsFavoriteButton from '../MarkAsFavoriteButton'
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
			isFirstChild={isFirstChild}
			CardTopRight={<MarkAsFavoriteButton investmentId={stock.id} />}>
			<MinimumValueUnit label={MINIMUM_VALUE}>
				<MinimumValue value={stock.minimumValue} />
			</MinimumValueUnit>
			<ProfitabilityUnit label={PROFITABILITY}>
				<ProfitabilityDisplay profitability={stock.profitability} />
			</ProfitabilityUnit>
		</InvestmentCard>
	)
}

export default StockCard
