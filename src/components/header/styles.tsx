import styled from 'styled-components/native';
import Colors from '../../resources/colors';

export const ContainerHeader = styled.View`
  background: #fff;
  padding: 40px 20px 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${Colors.gray02};
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${Colors.primary};
  font-weight: bold;
  font-family: 'Montserrat';
`;

export const ContentButton = styled.TouchableHighlight`
  width: 24px;
  height: 24px;
  background: ${Colors.primary};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;
