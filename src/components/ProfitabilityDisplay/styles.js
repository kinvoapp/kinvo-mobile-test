import styled from 'styled-components/native'
import ArrowUp from '../../assets/arrow-up.svg'

export const Container = styled.View`
	flex-direction: row;
`

export const Arrow = styled(ArrowUp).attrs((props) => ({
	fill: getColor(props),
	fillOpacity: props.isActive ? 1 : 0.5,
	rotation: props.profitability > 0 ? 0 : 180
}))`
	display: ${(props) => (props.profitability === 0 ? 'none' : 'flex')};
`

export const ProfitabilityText = styled.Text.attrs((props) => ({
	color: getColor(props)
}))`
	font-size: 12px;
	color: ${(props) => props.color};
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: ${(props) => props.theme.semiBoldFontWeight};
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`

function getColor(props) {
	if (props.isActive) {
		if (props.profitability > 0) return '#AED335'
		else if (props.profitability === 0) return props.theme.primaryTextColor
		return '#E85D1F'
	}
	return props.theme.primaryTextColor
}
