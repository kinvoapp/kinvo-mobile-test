import styled from 'styled-components/native'
import Ripple from 'react-native-material-ripple'

export const Container = styled.View`
	align-items: center;
	margin: auto 65px;
`

export const Title = styled.Text`
	line-height: 20px;
	font-size: 16px;
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: bold;
	color: ${(props) => props.theme.primaryTextColor};
	margin-bottom: 12px;
`

export const Message = styled.Text`
	text-align: center;
	line-height: 20px;
	font-size: 12px;
	font-family: ${(props) => props.theme.primaryFontFamily};
	color: ${(props) => props.theme.primaryTextColor};
	margin-bottom: 20px;
`

export const Button = styled(Ripple)`
	background-color: ${(props) => props.theme.secondaryColor};
	border-radius: 100px;
	padding: 8px 22px;
`

export const ButtonText = styled.Text`
	font-size: 12px;
	color: ${(props) => props.theme.secondaryTextColor};
	text-transform: uppercase;
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: ${(props) => props.theme.semiBoldFontWeight};
`
