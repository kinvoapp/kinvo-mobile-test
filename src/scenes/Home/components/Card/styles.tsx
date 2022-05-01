import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Chip as ChipComponent } from '~/components';
import { Heading2 } from '~/styles/typography';

export const Container = styled(TouchableOpacity)`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 32px 20px;
`;

export const ImageContainer = styled.View`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50px;
  padding: 15px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 12px;
`;

export const Title = styled(Heading2)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ChipContainer = styled.View`
  justify-content: center;
`;

export const Chip = styled(ChipComponent)`
  padding: 4px 15px;
`;
