import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import {moderateScale} from '~/theme'
import { Header, WrapperCard } from '~/components';

// Colors
const primaryContrast = getTheme('primary.contrast');

export const Wrapper = styled.View`
  height: ${moderateScale(550)};
  background: ${primaryContrast};
`;

export const HeaderStyled = styled(Header)``;

export const WrapperCardStyled = styled(WrapperCard)`
  flex-direction: row;
  align-items: center;
`;

export const WrapperCards = styled.View`
  flex: 1;

  align-items: center;
  padding-top: ${moderateScale(20)};
`;

export const Icon = styled.Image`
  width: ${moderateScale(25)};
  height: ${moderateScale(25)};
`;

export const IconActions = styled(Icon).attrs({
  source: require('~/assets/actions.png')
})``;

export const IconFunds = styled(Icon).attrs({
  source: require('~/assets/wallet.png'),
  resizeMode: 'contain'
})``;

export const IconPredictions = styled(Icon).attrs({
  source: require('~/assets/foresight.png'),
  resizeMode: 'contain'
})`
`;