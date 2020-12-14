import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'

const primaryContrast = getTheme('primary.contrast');
export const Container = styled.View`

  flex: 1;

  background: ${primaryContrast}
`;
