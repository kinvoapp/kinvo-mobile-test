import styled from 'styled-components/native'
import Card from '../Card'

export const Container = styled(Card)`
	margin-top: 20px;
	margin-bottom: ${(props) => (props.isLastChild ? '20px' : '0px')};
	justify-content: center;
	padding: 0 20px;
`

export const Content = styled.View`
	flex-direction: row;
`

export const TextContainer = styled.View`
	align-self: center;
	margin-left: 12px;
`

export const Title = styled.Text`
	font-size: 16px;
	color: ${(props) => props.theme.secondaryColor};
	font-weight: bold;
`

export const Subtitle = styled.Text`
	font-size: 10px;
	color: ${(props) => props.theme.primaryTextColor};
	font-weight: 600;
`
