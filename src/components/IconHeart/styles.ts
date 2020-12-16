import styled from 'styled-components/native';

import {getTheme, ifStyle, AntDesign} from '~/utils/helpers'

type IconProps = {
  showIconHeart?: boolean;
}

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');

export const IconHeart = styled(AntDesign).attrs(props=> ({
  size: 30,
  color: primaryMain(props)
}))<IconProps>``;