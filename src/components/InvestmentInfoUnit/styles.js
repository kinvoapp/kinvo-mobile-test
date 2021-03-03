import styled from 'styled-components/native'

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const InvestmentInfoLabel = styled.Text`
	color: ${(props) => props.theme.primaryTextColor};
	font-size: 10px;
	font-family: ${(props) => props.theme.primaryFontFamily};
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`
