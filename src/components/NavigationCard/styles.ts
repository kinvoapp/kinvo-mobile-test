import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 120px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const SvgContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 56px;
  height: 52px;
  background-color: #ecf0f2;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-family: 'Montserrat-Bold';
  color: #6f4dbf;
`;

export const SubtitleText = styled.Text`
  font-size: 10px;
  font-family: 'Montserrat-SemiBold';
  color: #627179;
`;

export const NewCardContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 20px;
  border-radius: 25px;
  background-color: #40c5d6;
`;

export const NewCardText = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: #fff;
`;
