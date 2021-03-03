import styled from 'styled-components/native'
import InvestmentInfoUnit from '../InvestmentInfoUnit'

export const MinimumValueUnit = styled(InvestmentInfoUnit)`
	margin-top: 13px;
`

export const TaxUnit = styled(InvestmentInfoUnit)`
	margin-top: 18px;
`

export const RedemptionTermUnit = styled(InvestmentInfoUnit)`
	margin-top: 13px;
`

export const ProfitabilityUnit = styled(InvestmentInfoUnit)`
	margin-top: 20px;
	margin-bottom: 6px;
`

export const UnitText = styled.Text`
	font-size: 12px;
	color: ${(props) => props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: ${(props) => props.theme.semiBoldFontWeight};
`
