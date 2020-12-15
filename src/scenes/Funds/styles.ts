import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import {moderateScale} from '~/theme'
import {Card} from '~/components'

// Colors
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');

// Spacings
const mediumSpacing = getTheme('mediumSpacing');

export const Wrapper = styled.View`
  flex: 1;
  background: ${primaryContrast};
`;

export const WrapperCards = styled.ScrollView`
  padding-top: ${mediumSpacing};
`;

export const Content = styled.View`
  flex: 1;  
  width: 90%;
  margin: 0 auto;

  padding-bottom: ${moderateScale(20)};
`;

export const CardStyled = styled(Card)`
  margin-bottom: ${mediumSpacing};
`;

export const WrapperLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
  color: primaryMain(props)
}))``;

