import styled from "styled-components/native";
import { Screen, CardTitle, Card } from "../../styles";
import Colors from "../../constants/colors";

export const HomeScreen = styled(Screen)`
  align-items: center;
`;

export const NavigationCardContainer = styled(Card)`
  padding: 32px 0 32px 20px;
  height: 120px;
  margin-top: 20px;
`;

export const NavigationCardTitle = styled(CardTitle)`
  color: ${Colors.primary};
  font-family: montserrat-bold;
`;
export const NavigationCardSubtitle = styled.Text`
  font-size: 10px;
  color: ${Colors.secondary};
  font-family: montserrat-semibold;
`;
export const TextContainer = styled.View`
  margin-left: 12px;
`;
