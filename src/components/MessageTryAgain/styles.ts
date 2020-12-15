import styled from 'styled-components/native';
import Typography from '../Typography'
import { getTheme, ifStyle } from '~/utils/helpers';
import { moderateScale } from '~/theme';

// Colors 
const primaryLight = getTheme('primary.light')
const primaryMain = getTheme('primary.main')
const secondaryMain = getTheme('secondary.main')
const secondaryLight = getTheme('secondary.light')
const secondaryDark = getTheme('secondary.dark')

// Spacing
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');

// Radius
const mediumRadius = getTheme('largeRadius');

// Ifs
const isPrimary = ifStyle('typeButton');

export const Wrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: 'title2',
})`
  color: ${secondaryLight};
  font-weight: bold;

  margin-bottom: ${smallSpacing};
`;

export const Description = styled(Typography).attrs({
  variant: 'subhead',
})`
  color: ${secondaryLight};
  margin-bottom: ${mediumSpacing};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  height: ${moderateScale(30)};

  border-radius: ${mediumRadius};
  background: ${primaryMain};

  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography).attrs({
  variant: 'footnote',
})`
  color: ${primaryLight};
`;
