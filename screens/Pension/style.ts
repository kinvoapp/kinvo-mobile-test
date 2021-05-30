import styled from "styled-components/native";
import { Screen, CardTitle, Card, RowSpacedView } from "../../styles";
import colors from "../../constants/colors";
import { FilterContainerProps, FilterTextProps, PensionCardContainerProps } from "./types";


export const PensionScreen = styled(Screen)`
  align-items: center;
`;

export const PensionCardContainer = styled(Card)<PensionCardContainerProps>`
  padding: 16px 20px 24px 16px;
  margin-bottom: 20px;
  height: 218px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFF"};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;

export const PensionCardTitle = styled(CardTitle)`
  color: ${colors.secondary};
`;
export const PensionCardSubtitle = styled.Text`
  font-size: 12px;
  color: ${colors.secondary};
  font-family: montserrat-semibold;
`;
export const Text = styled.Text`
  color: ${colors.secondary};
  font-family: montserrat-medium;
  font-size: 10px;
`;

export const PensionTextContainer = styled.View`
  border-bottom-color: ${colors.border};
  border-bottom-width: 1px;
  padding-bottom: 15px;
`;
export const ValuesContainer = styled.View`
  padding-right: 6px;
`;
export const ValuesTextContainer = styled(RowSpacedView)`
  margin-top: 15px;
`;

export const FilterContainer= styled.View<FilterContainerProps>`
  padding: 9px 0px 8px 0px;
  background-color: ${props => props.isActive ? colors.primary : "#FFF"};
  border-radius: 100px;
  width: 93px;
  align-items: center;
`;

export const FiltersContainer = styled.View`
  flex-direction: row;
  width: 320px;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FilterText = styled.Text<FilterTextProps>`
  color:  ${props => props.isActive ? "#FFF": colors.secondary };
  font-family: montserrat-semibold;
  font-size: 12px;
`;

export const Separator = styled.View`
  width: 320px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;



