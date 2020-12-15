import styled from 'styled-components/native';
import {getTheme, ifStyle} from '~/utils/helpers'
import {moderateScale} from '~/theme'
import {Card, Typography} from '~/components'

type ButtonProps = {
  active?: boolean;
}

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryLight = getTheme('secondary.light');

// Spacings
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');
const largeSpacing = getTheme('largeSpacing');

// Radius
const smallRadius = getTheme('smallRadius');
const mediumRadius = getTheme('mediumRadius');
const largeRadius = getTheme('largeRadius');

// Ifs
const isActiveButton = ifStyle('active');

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

export const CardStyled = styled(Card)`
  height: ${moderateScale(250)};
`;

export const WrapperSearch = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  margin-bottom: ${largeSpacing};
`;

export const ButtonSearch = styled.TouchableOpacity<ButtonProps>`
  width: ${moderateScale(100)};
  height: ${moderateScale(40)};
  border-radius: ${largeRadius};

  background: ${isActiveButton(primaryMain, primaryLight)};

  align-items: center;
  justify-content: center;
`;

export const Text = styled(Typography).attrs({
  variant: 'subhead',
})<ButtonProps>`
  color: ${isActiveButton(primaryLight, secondaryLight)};
  font-weight: bold;
`;
