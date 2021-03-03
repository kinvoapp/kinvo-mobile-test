import styled from 'styled-components/native'
import InvestmentInfoUnit from '../InvestmentInfoUnit'
import StarEmpty from '../../assets/star-empty.svg'
import StarFilled from '../../assets/star-filled.svg'

export const RatingUnit = styled(InvestmentInfoUnit)`
	margin-top: 18px;
`

export const StarContainer = styled.View`
	flex-direction: row;
`

export const StarEmptyIcon = styled(StarEmpty).attrs((props) => ({
	color: props.isActive ? '#F8C22E' : props.theme.primaryTextColor
}))``

export const StarFilledIcon = styled(StarFilled).attrs((props) => ({
	color: props.isActive ? '#F8C22E' : props.theme.primaryTextColor
}))``

export const MinimumValueUnit = styled(InvestmentInfoUnit)`
	margin-top: 15px;
`

export const ProfitabilityUnit = styled(InvestmentInfoUnit)`
	margin-top: 15px;
	margin-bottom: 4px;
`
