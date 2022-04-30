
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items:  center;
  width: 320px;
  height: 110px;
  background-color: #FFFFFF;
  border: 4px solid #DAE0E3;
  border-radius: 10px;
  opacity: 1;
`;

export const Image = styled.Image`
  margin-top: -88px;
  width: 40px;
  height: 130px;
  right: 120px;
  top: 30px;
  overflow: hidden;
`;

export const ImgGray = styled.Image`
  margin-top: -10px;
  width: 49px;
  height: 49px;
  right: 120px;
  top: 30px;
  opacity: 1;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.BOLD} ;
  font-size: 16px;
  align-items: center;
  top: -57px;
  right: 65px;
`;

export const SubTitle = styled.Text`
  color: #627179;
  font-family: ${({ theme }) => theme.FONTS.SEMIBOLD} ;
  font-size: 11px;
  align-items: center;
  top: -55;
  right: 63px;
`;








