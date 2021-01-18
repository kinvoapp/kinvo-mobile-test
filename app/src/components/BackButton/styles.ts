import styled from "styled-components/native";
import Colors from "../../utils/colors";

export const TouchableContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  max-height: 24px;
  border-radius: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.PRIMARY};
  margin-left: 24px;
  position: relative;
`;
