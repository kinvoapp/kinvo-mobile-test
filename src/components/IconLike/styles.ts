import styled from 'styled-components/native';
import ActionIcon from '~/assets/actions.png';
import {AntDesign} from '~/utils/helpers'
import {getTheme} from '~/utils/helpers'

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryLight = getTheme('secondary.light');
const secondaryContrast = getTheme('secondary.contrast');


// export const IconHeartActive = styled.Image.attrs({
//   source: ActionIcon,
// })``;

export const IconHeartActive = styled(AntDesign).attrs(props => ({
  name: 'heart',
  size: 30,
  color: primaryMain(props)
}))``;

export const IconHeart = styled(AntDesign).attrs(props => ({
  name: 'hearto',
  size: 30,
  color: primaryMain(props)
}))``;
