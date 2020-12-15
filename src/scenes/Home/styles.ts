import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import {moderateScale} from '~/theme'
import { Header, WrapperCard } from '~/components';

// Colors
const primaryContrast = getTheme('primary.contrast');

//Spacings
const mediumSpacing = getTheme('mediumSpacing');

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

export const IconActions = styled.Image`
  width: 30px;
  height: 30px;

`;

export const IconFunds = styled.Image`
  width: 30px;
  height: 30px;

`;
export const IconPredictions = styled.Image`
  width: 30px;
  height: 30px;

`;