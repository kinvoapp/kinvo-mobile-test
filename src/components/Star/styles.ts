import styled from 'styled-components/native';
import {AntDesign, getTheme} from '~/utils/helpers'

// colors
const tertiaryLight = getTheme('tertiary.light');

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const IconStar = styled(AntDesign).attrs(props => ({
  size: 20,
  color: tertiaryLight(props)
}))``;

