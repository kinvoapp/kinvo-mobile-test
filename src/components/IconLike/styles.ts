import styled from 'styled-components/native';
import {AntDesign} from '~/utils/helpers'
import {getTheme} from '~/utils/helpers'

// Colors
const primaryMain = getTheme('primary.main');

export const IconHeartActive = styled(AntDesign).attrs(props => ({
  name: 'heart',
  size: 30,
  color: primaryMain(props)
}))``;

