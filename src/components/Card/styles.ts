import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import ButtonState from '../ButtonState'
import Typography from '../Typography'
import {moderateScale} from '~/theme'

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryLight = getTheme('secondary.light');

// Spacings
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');

// Radius
const mediumRadius = getTheme('mediumRadius');
const giantSpacing = getTheme('giantSpacing');

export const Wrapper = styled.TouchableOpacity`
  width: 90%;
  height: ${moderateScale(130)};
  border-radius: ${mediumRadius};
  padding: ${mediumSpacing};
  background: ${primaryLight};

  flex-direction: row;
  align-items: center;
`;