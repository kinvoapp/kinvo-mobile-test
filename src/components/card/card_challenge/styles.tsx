import styled from 'styled-components/native';
import Colors from '../../../resources/colors';

export const Card = styled.View`
  width: 100%;
  height: 120px;
  padding: 0 20px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid ${Colors.gray02};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BoxIcon = styled.View`
  border-radius: 56px;
  display: flex;
  background: ${Colors.gray03};
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${Colors.primary};
  font-family: 'Montserrat';
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  font-size: 10px;
  color: ${Colors.gray01};
  font-family: 'Montserrat';
`;
