import styled from "styled-components/native";
import Colors from "../../utils/colors";

export const Container = styled.View`
  height: 100%;
  flex: 1;
  background-color: ${Colors.BODY};
  align-items: center;
  justify-content: center;
`;

export const MessageContainer = styled.View`
  margin-top: 12px;
  margin-bottom: 20px;
  max-width: 200px;
`;
