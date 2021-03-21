import styled from 'styled-components/native';
import colors from '../../resources/colors';

export const Container = styled.ScrollView`
  background: ${colors.gray03};
  height: 100%;
`;

export const ContentCardPension = styled.View`
  margin: 0 20px 20px;
`;
export const ContentMenuPension = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px 0;
`;

export const divider = {margin: 20};
