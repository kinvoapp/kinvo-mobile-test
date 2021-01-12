import styled from 'styled-components/native'
import colors from '../../utils/colors'

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 50%;
  padding: 0 50px;
`

export const Title = styled.Text`
  color: ${colors.DarkGrey};
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`

export const SubTitle = styled.Text`
  color: ${colors.DarkGrey};
  font-size: 18px;
  text-align: center;
`

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  width: 80%;
  padding: 10px;
  background: ${colors.purple};
  align-items: center;
  border-radius: 20px;
`

export const Bold = styled.Text`
  color: #fff;
  font-weight: bold;
`
