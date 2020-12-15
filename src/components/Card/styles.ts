import styled from 'styled-components/native';
import {getTheme} from '~/utils/helpers'
import Typography from '../Typography'
import LikeIcon from '../IconLike'
import {moderateScale} from '~/theme'

// Colors
const primaryLight = getTheme('primary.light');
const primaryMain = getTheme('primary.main');
const primaryContrast = getTheme('primary.contrast');
const secondaryLight = getTheme('secondary.light');
const secondaryContrast = getTheme('secondary.contrast');

// Spacings
const smallSpacing = getTheme('smallSpacing');
const mediumSpacing = getTheme('mediumSpacing');

// Radius
const mediumRadius = getTheme('mediumRadius');
const giantSpacing = getTheme('giantSpacing');

export const Wrapper = styled.View`
  width: 90%;
  height: ${moderateScale(180)};
  border-radius: ${mediumRadius};
  padding: ${mediumSpacing};
  background: ${primaryLight};
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: ${smallSpacing};
  border-bottom-width: 1px;
  border-bottom-color: ${primaryContrast};

  margin-bottom: ${smallSpacing};
`;

export const ContentHeader = styled.View``;

export const IconLikeStyled = styled(LikeIcon)``;

export const Content = styled.View`
  flex: 1;

  justify-content: space-around;
`;

export const WrapperLine = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled(Typography).attrs({
  variant: 'title2',
})`
  font-weight: bold;
  color: ${secondaryLight}
`;

export const Description = styled(Typography).attrs({
  variant: 'title4',
})`
  font-weight: bold;
  color: ${secondaryLight}
`;

export const DescriptionValue = styled(Typography).attrs({
  variant: 'body',
})`
  font-weight: bold;
  color: ${secondaryLight};
`;

export const TextCard = styled(Typography).attrs({
  variant: 'body',
})`
  color: ${secondaryLight}
`;

export const Profitability = styled(Typography).attrs({
  variant: 'body',
})`
  font-weight: bold;
  color: ${secondaryContrast};
`;
