import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import {moderateScale} from '~/theme'
import Card from '~/components/Card'

const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.View`
  height: ${moderateScale(550)};
  background: ${primaryContrast};
`;

export const WrapperCards = styled.View`
  flex: 1;

  align-items: center;
  padding-top: ${moderateScale(20)};
`;

export const CardStyled = styled(Card)``;

