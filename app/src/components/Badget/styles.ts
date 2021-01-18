import styled from "styled-components/native";
import Colors from "../../utils/colors";

type ContainerProps = {
  backgroundColor?: string;
};

export const Container = styled.View<ContainerProps>`
  padding: 4px 15px;
  min-height: 20px;
  background-color: ${(p) => p.backgroundColor ?? Colors.TINT};
  border-radius: 10px;
`;
