import styled from 'styled-components/native'
import { CLOSED } from '../../utils/consts/fundStatus'

export const Label = styled.View`
	position: ${(props) => (props.isCardTopRight ? 'absolute' : 'relative')};
	background-color: ${(props) =>
		props.status === CLOSED ? '#818181' : '#36c4d6'};
	border-radius: 100px;
	padding: 4px 15px;
	top: ${(props) => (props.isCardTopRight ? '15px' : '0px')};
	end: ${(props) => (props.isCardTopRight ? '10px' : '0px')};
	margin-start: auto;
`

export const LabelText = styled.Text`
	font-size: 10px;
	font-family: ${(props) => props.theme.primaryFontFamily};
	color: ${(props) =>
		props.status === CLOSED ? '#F7F8F8' : props.theme.secondaryTextColor};
`
