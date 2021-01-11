import styled from 'styled-components/native'
import colors from '../../utils/colors'

export const Container = styled.View`
  flex-direction: row;
`

export const ValuePostive = styled.Text`
  font-weight: bold;
  color: ${colors.green};
`

export const ValueNegative = styled.Text`
  font-weight: bold;
`

export const ValueZero = styled.Text`
  font-weight: bold;
`
