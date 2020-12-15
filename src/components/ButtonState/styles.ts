import styled from 'styled-components/native';
import { getTheme, ifStyle } from '~/utils/helpers';
import { moderateScale } from '~/theme';
import Typography from '../Typography'
type ButtonProps = {
  typeButton?: boolean;
}

// Colors 
const PrimaryLight = getTheme('primary.light')
const SecondaryMain = getTheme('secondary.main')
const SecondaryDark = getTheme('secondary.dark')

// Radius
const mediumRadius = getTheme('largeRadius');

// Ifs
const isPrimary = ifStyle('typeButton');

export const Wrapper = styled.View<ButtonProps>`
  background: ${isPrimary(SecondaryMain, SecondaryDark)};

  width: ${isPrimary(moderateScale(50), moderateScale(70))};
  height: ${moderateScale(30)};
  border-radius: ${mediumRadius};

  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography).attrs({
  variant: 'footnote',
})`
  color: ${PrimaryLight};
`;
