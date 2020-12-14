import styled from 'styled-components/native';
import {verticalScale, moderateScale } from '~/theme';
import { AntDesign, getTheme, ifStyle } from '~/utils/helpers';
import Touchable from '../Touchable';
import Typography from '../Typography';

type PropsIconBack = {
  hideIconBack?: boolean;
  secondary?: boolean;
};

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const secondaryLight = getTheme('secondary.light');

// Spacings
const smallSpacing = getTheme('smallSpacing');

// Ifs
const isHide = ifStyle('hideIconBack');

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 ${smallSpacing};
  height: ${verticalScale(80)};
  z-index: 1;
  background: ${primaryLight};
`;

export const IconBack = styled(AntDesign).attrs((props: PropsIconBack) => ({
  name: 'leftcircle',
  color: primaryMain(props),
  size: 30,
}))<PropsIconBack>`
  margin-right: ${moderateScale(15)};
  display: ${isHide('none', 'flex')};
`;

export const Title = styled(Typography).attrs({
  variant: 'title2',
})<PropsIconBack>`
  color: ${primaryMain};
  font-weight: bold;
`;

export const TouchableStyled = styled(Touchable)`
  z-index: 1;
`;
