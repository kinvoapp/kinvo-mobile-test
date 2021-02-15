import styled from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.WHITE};
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.BORDER};
`;

export const TopContent = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom-color: ${colors.BORDER};
  border-bottom-width: 1px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Bold';
  font-size: 16px;
  color: ${colors.BLACK};
`;

export const Ticker = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${colors.BLACK};
  padding: 5px 0 15px 0;
`;

export const BottomContent = styled.View`
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Minimum = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const TextValue = styled.Text`
  font-family: 'Montserrat-Medium';
  font-size: 10px;
  color: ${colors.BLACK};
`;

export const MinimumValue = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 12px;
  color: ${colors.BLACK};
`;

export const ProfitabilityContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;