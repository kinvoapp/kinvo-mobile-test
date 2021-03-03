import React from 'react'
import InvestmentCard from '../InvestmentCard'
import MinimumValue from '../MinimumValue'
import ProfitabilityDisplay from '../ProfitabilityDisplay'
import StatusLabel from '../StatusLabel'
import {
	MINIMUM_VALUE,
	PROFITABILITY,
	RATING
} from '../../utils/consts/investmentInfoLabels'
import {
	RatingUnit,
	StarContainer,
	StarEmptyIcon,
	StarFilledIcon,
	MinimumValueUnit,
	ProfitabilityUnit
} from './styles'
import MAX_RATING from '../../utils/consts/maxRating'
import { COMMON, CLOSED } from '../../utils/consts/fundStatus'

function FundCard({ fund, isFirstChild }) {
	return (
		<InvestmentCard
			title={fund.name}
			subtitle={fund.type}
			CardTopRight={getStatusLabel()}
			isFirstChild={isFirstChild}
			isActive={isActive()}>
			<RatingUnit label={RATING} isActive={isActive()}>
				<StarContainer>
					{getFilledStars()}
					{getEmptyStars()}
				</StarContainer>
			</RatingUnit>
			<MinimumValueUnit label={MINIMUM_VALUE} isActive={isActive()}>
				<MinimumValue value={fund.minimumValue} isActive={isActive()} />
			</MinimumValueUnit>
			<ProfitabilityUnit label={PROFITABILITY} isActive={isActive()}>
				<ProfitabilityDisplay
					profitability={fund.profitability}
					isActive={isActive()}
				/>
			</ProfitabilityUnit>
		</InvestmentCard>
	)

	function getStatusLabel() {
		return fund.status !== COMMON ? (
			<StatusLabel status={fund.status} />
		) : null
	}

	function isActive() {
		return fund.status !== CLOSED
	}

	function getFilledStars() {
		const filledStars = []
		for (let i = 0; i < fund.rating; i++) {
			filledStars.push(
				<StarFilledIcon key={'filled-' + i} isActive={isActive()} />
			)
		}
		return filledStars
	}

	function getEmptyStars() {
		const emptyStars = []
		for (let i = 0; i < MAX_RATING - fund.rating; i++) {
			emptyStars.push(
				<StarEmptyIcon key={'empty-' + i} isActive={isActive()} />
			)
		}
		return emptyStars
	}
}

export default FundCard
