import styled from "styled-components/native";
import Colors from "../../utils/colors";

export const OptionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const IconCircle = styled.View`
  width: 56px;
  height: 56px;
  background-color: ${Colors.BODY};
  border-radius: 56px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

export const OptionNameContainer = styled.View`
  flex-grow: 1;
`;
