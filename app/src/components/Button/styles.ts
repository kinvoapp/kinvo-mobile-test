import styled from "styled-components/native";
import Colors from "../../utils/colors";

export const Container = styled.TouchableOpacity`
  padding: 10px 23px;
  min-height: 20px;
  /* TODO: Adicionar cor no enum de cores */
  background-color: ${Colors.PRIMARY};
  border-radius: 22px;
`;
