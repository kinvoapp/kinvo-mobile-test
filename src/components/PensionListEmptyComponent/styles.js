import styled from 'styled-components/native'

export const Message = styled.Text`
	font-size: 12px;
	color: ${(props) => props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
	margin: 43px auto auto auto;
	width: 210px;
	text-align: center;
	line-height: 20px;
`
