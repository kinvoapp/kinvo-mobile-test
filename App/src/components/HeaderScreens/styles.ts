import styled from 'styled-components/native'
import colors from '../../utils/colors'

export const Container = styled.View`
  height: 120px;
  background-color: #fff;
  width: 100%;
  padding: 30px;
  align-items: center;
  flex-direction: row;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.purple};
  font-size: 25px;
`

export const GoBack = styled.View`
  padding: 10px;
  border-radius: 50px;
  background-color: ${colors.purple};
  margin-right: 20px;
`
