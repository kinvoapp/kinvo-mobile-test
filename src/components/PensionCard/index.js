import React from 'react'
import InvestmentCard from '../InvestmentCard'
import MinimumValue from '../MinimumValue'
import ProfitabilityDisplay from '../ProfitabilityDisplay'
import {
	MINIMUM_VALUE,
	PROFITABILITY,
	TAX,
	REDEMPTION_TERM
} from '../../utils/consts/investmentInfoLabels'
import { toBRNumber } from '../../utils/formatNumber'
import {
	MinimumValueUnit,
	TaxUnit,
	RedemptionTermUnit,
	ProfitabilityUnit,
	UnitText
} from './styles'

function PensionCard({ pension, isFirstChild }) {
	return (
		<InvestmentCard
			title={pension.name}
			subtitle={pension.type}
			isFirstChild={isFirstChild}>
			<MinimumValueUnit label={MINIMUM_VALUE}>
				<MinimumValue value={pension.minimumValue} />
			</MinimumValueUnit>
			<TaxUnit label={TAX}>
				<UnitText>{toBRNumber(pension.tax, 2, 2) + '%'}</UnitText>
			</TaxUnit>
			<RedemptionTermUnit label={REDEMPTION_TERM}>
				<UnitText>{'D+ ' + pension.redemptionTerm}</UnitText>
			</RedemptionTermUnit>
			<ProfitabilityUnit label={PROFITABILITY}>
				<ProfitabilityDisplay profitability={pension.profitability} />
			</ProfitabilityUnit>
		</InvestmentCard>
	)
}

export default PensionCard
