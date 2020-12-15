import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import {moderateScale} from '~/theme'
import {Card} from '~/components'

// Colors
const primaryContrast = getTheme('primary.contrast');

// Spacings
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');

export const Wrapper = styled.View`
  flex: 1;
  background: ${primaryContrast};
`;

export const WrapperCards = styled.View`
  flex: 1;

  align-items: center;
  padding-top: ${mediumSpacing};
`;

export const ScrollView = styled.ScrollView`

`;

export const CardStyled = styled(Card)``;
