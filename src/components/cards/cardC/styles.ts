import styled from 'styled-components/native';

export const Container = styled.View`
  align-items:  center;
  width: 320px;
  height: 110px;
  background-color: #FFFFFF;
  border: 5px solid #DAE0E3;
  border-radius: 10px;
  opacity: 1;
`;

export const ImgGray = styled.Image`
  margin-top: -10px;
  width: 49px;
  height: 49px;
  right: 120px;
  top: 30px;
  opacity: 1;
`;

export const CardPrev = styled.Image`
  margin-top: -81px;
  width: 26px;
  height: 115px;
  right: 120px;
  top: 30px;
`;

export const Prevtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-family: ${({ theme }) => theme.FONTS.BOLD} ;
  font-size: 16px;
  align-items: center;
  top: -50px;
  right: 38px;
`;

export const Prevsub = styled.Text`
  color: #627179;
  font-family: ${({ theme }) => theme.FONTS.SEMIBOLD} ;
  font-size: 11px;
  align-items: center;
  top: -50;
  right: 63px;
`;
