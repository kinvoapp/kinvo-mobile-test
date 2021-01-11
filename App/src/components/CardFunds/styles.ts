import styled from 'styled-components/native'
import colors from '../../utils/colors'

export const Container = styled.View`
  width: 90%;
  height: 150px;
  background-color: #fff;
  margin: 20px;
  border-radius: 15px;
  padding: 20px;
  justify-content: center;
  text-align: center;
`
export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const ContentLeft = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
`

export const Bold = styled.Text`
  color: ${colors.purple};
  font-weight: bold;
  font-size: 18px;
`

export const Info = styled.Text`
  color: darkgray;
  font-size: 14px;
`

export const ImgContainer = styled.View`
  padding: 20px;
  background-color: ${colors.gray};
  width: 80px;
  border-radius: 50px;
  align-items: center;
`

export const Img = styled.Image``
