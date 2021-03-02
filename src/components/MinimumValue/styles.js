import styled from 'styled-components/native'

export const MinimumValueText = styled.Text`
	font-size: 12px;
	color: ${(props) => props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: ${(props) => props.theme.semiBoldFontWeight};
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`
