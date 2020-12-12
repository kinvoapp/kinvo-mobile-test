import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 20%;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fff;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 18px;
  color: ${colors.primary};
`;

export const SubTitle = styled.Text`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 12px;
  color: ${colors.second};
`;

export const Column = styled.View`
  margin-left: 10px;
  width: 120px;
`;

export const Content = styled.View`
  height: 10px;
  width: 10px;
  margin-left: 14%;
  margin-top: -5px;
`;
