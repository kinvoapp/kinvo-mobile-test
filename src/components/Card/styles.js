import styled from 'styled-components/native'

export const Container = styled.Pressable`
	background-color: ${(props) => props.theme.primaryColor};
	min-height: 120px;
	border: 1px solid ${(props) => props.theme.cardBorderColor};
	border-radius: 10px;
`
