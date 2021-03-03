import styled from 'styled-components/native'

export const Container = styled.View`
	justify-content: center;
`

export const FilterContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: 20px 0;
`

export const Filter = styled.Pressable`
	background-color: ${(props) =>
		props.isPressed
			? props.theme.secondaryColor
			: props.theme.primaryColor};
	border-radius: 100px;
	height: 32px;
	width: 93px;
	align-items: center;
	justify-content: center;
`

export const FilterText = styled.Text`
	font-size: 12px;
	color: ${(props) =>
		props.isPressed
			? props.theme.secondaryTextColor
			: props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: ${(props) => props.theme.semiBoldFontWeight};
`

export const HorizontalDivider = styled.View`
	height: 1px;
	background-color: ${(props) => props.theme.cardBorderColor};
	opacity: 0.7;
`
