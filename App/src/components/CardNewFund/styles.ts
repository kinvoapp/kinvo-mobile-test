import styled from 'styled-components/native'
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 90%;
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
`
export const Header = styled.View`
  justify-content: space-around;
  flex-direction: row;
  padding: 5px;
`

export const TitleView = styled.View`
  flex-direction: column;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.DarkGrey};
  font-weight: bold;
  margin-right: 30px;
`

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${colors.DarkGrey};
  font-weight: bold;
`

export const DivTitle = styled.View`
  border: 1px solid ${colors.gray};
  margin: 20px 0;
`

export const Main = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 20px;
`

export const Infos = styled.Text`
  color: ${colors.DarkGrey};
  font-size: 12px;
  font-weight: bold;
`

export const Minimun = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.DarkGrey};
`
