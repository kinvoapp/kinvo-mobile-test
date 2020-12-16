import styled from 'styled-components/native';
import {getTheme, ifStyle, AntDesign} from '~/utils/helpers'
import Typography from '../Typography'
import IconHeart from '../IconHeart'
import ButtonState from '../ButtonState'
import Star from '../Star'
import {moderateScale} from '~/theme'

type ItemProps = {
  typeButton?: boolean;
}

type IconProps = {
  showIconHeart?: boolean;
}

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

// Ifs
const isClassification = ifStyle('showClassification');
const isAction = ifStyle('action');
const isPadding = ifStyle('showIconHeart');

export const Wrapper = styled.View<ItemProps>`
  width: 100%;
  height: ${isClassification(moderateScale(200), moderateScale(180))};
  border-radius: ${mediumRadius};
  padding: ${mediumSpacing};
  background: ${primaryLight};

  opacity: ${isAction(0.5, 1)}
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: ${isPadding(smallSpacing, 0)};
  border-bottom-width: 1px;
  border-bottom-color: ${primaryContrast};

  margin-bottom: ${smallSpacing};
`;

export const ContentHeader = styled.View``;

export const ButtonStateStyled = styled(ButtonState)``;

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
  variant: 'title3',
})`
  font-weight: bold;
  width: ${moderateScale(220)};
  color: ${secondaryLight};
`;

export const Description = styled(Typography).attrs({
  variant: 'title4',
})`
  font-weight: bold;
  color: ${secondaryLight};
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
  color: ${secondaryLight};
`;

export const Profitability = styled(Typography).attrs({
  variant: 'body',
})`
  font-weight: bold;
  color: ${secondaryContrast};
`;

export const StarStyled = styled(Star)``;

/* export const IconHeart = styled(AntDesign).attrs(props=> ({
  size: 30,
  color: primaryMain(props)
}))<IconProps>``; */


export const IconHeartStyled = styled(IconHeart)`
  
`;