import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { ThemeContext } from 'styled-components/native'
import { Container, Title, Message, Button, ButtonText } from './styles'
import { ERROR_OCCURRED } from '../../utils/consts/errorMessages'

function ErrorWarning({ error, retryAction }) {
	const theme = useContext(ThemeContext)
	const dispatch = useDispatch()

	return (
		<Container>
			<Title>{ERROR_OCCURRED}</Title>
			<Message>{error}</Message>
			<Button
				rippleContainerBorderRadius={100}
				rippleColor={theme.ripplePrimaryColor}
				rippleOpacity={0.4}
				onPress={retry}>
				<ButtonText>Tentar novamente</ButtonText>
			</Button>
		</Container>
	)

	function retry() {
		dispatch(retryAction())
	}
}

export default ErrorWarning
