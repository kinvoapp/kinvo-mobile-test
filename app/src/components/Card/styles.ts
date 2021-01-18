import styled from "styled-components/native";
import Colors from "../../utils/colors";

export const Container = styled.View`
  padding: 20px;
  background-color: ${Colors.LIGHT};
  border-radius: 10px;
  min-height: 145px;
  width: 100%;
  border: 1px solid ${Colors.BORDER};
  margin-bottom: 20px;
  flex: 1;
  justify-content: center;
`;
