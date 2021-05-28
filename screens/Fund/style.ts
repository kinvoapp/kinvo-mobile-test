import styled from "styled-components/native";
import { Screen, CardTitle, Card, RowSpacedView } from "../../styles";
import Colors from "../../constants/colors";
import { FundCardContainerProps } from "./types";

// TODO organizar ordem dos estilos

export const FundScreen = styled(Screen)`
align-items: center;
`;

export const FundCardContainer = styled(Card)<FundCardContainerProps>`
  padding: 16px 16px 22px 15px;
  margin-top: 20px;
  height: 185px;
  backgroundcolor: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFF"};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;

export const FundCardTitle = styled(CardTitle)`
  color: ${Colors.secondary};
`;
export const FundCardSubtitle = styled.Text`
  font-size: 12px;
  color: ${Colors.secondary};
  font-family: montserrat-semibold;
`;
export const Text = styled.Text`
  color: ${Colors.secondary};
  font-family: montserrat-medium;
  font-size: 10px;
`;

export const FundTextContainer = styled.View`
  border-bottom-color: ${Colors.border};
  border-bottom-width: 1px;
  padding-bottom: 15px;
`;
export const ValuesContainer = styled.View`
  padding-right: 6px;
`;
export const ValuesTextContainer = styled(RowSpacedView)`
  margin-top: 15px;
`;
