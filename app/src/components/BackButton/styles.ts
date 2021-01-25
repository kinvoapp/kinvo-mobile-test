import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const CircleContainer = styled(RectButton)`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #6f4dbf;
`;
