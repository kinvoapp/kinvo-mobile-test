import styled from 'styled-components/native';
import { Color } from '~/styles/colors';
import { Subtitle } from '~/styles/typography';

interface ChipStyleProps {
  color?: Color;
}

export const Container = styled.View<ChipStyleProps>`
  align-items: center;
  background: ${({ theme, color }) => color || theme.colors.secondary};
  border-radius: 20px;
  justify-content: center;
  padding: 9px 15px;
`;

export const Title = styled(Subtitle)<ChipStyleProps>`
  color: ${({ theme, color }) => color || theme.colors.white};
`;
