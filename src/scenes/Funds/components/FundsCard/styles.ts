import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Chip as ChipComponent } from '~/components';
import { Heading2 } from '~/styles/typography';

interface ContainerProps {
  hasOpacity: boolean;
}

export const Container = styled.View<ContainerProps>`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 16px;

  ${({ hasOpacity }) =>
    hasOpacity &&
    css`
      opacity: 0.5;
    `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

interface TitleProps {
  hasChip: boolean;
}

const TitleAttrs = () => ({
  numberOfLines: 3,
});

const TEXT_WITH = Dimensions.get('window').width - 16 * 6;

export const Title = styled(Heading2).attrs(TitleAttrs)<TitleProps>`
  ${({ hasChip }) =>
    hasChip &&
    css`
      width: ${TEXT_WITH / 1.3}px;
    `}
`;

export const InfoContainer = styled.View`
  margin-top: 10px;
`;

export const Chip = styled(ChipComponent)`
  padding: 4px 15px;
`;
