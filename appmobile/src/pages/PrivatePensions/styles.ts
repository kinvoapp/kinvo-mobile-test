import styled from 'styled-components/native';

import { color } from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const FilterList = styled.View`
  margin-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${color.BORDER};
`;

export const FilterItem = styled.TouchableOpacity`
  background: ${color.WHITE};
  padding: 8px 15px;
  border-radius: 20px;
`;

export const TextFilter = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${color.BLACK};
  text-transform: uppercase;
`;
