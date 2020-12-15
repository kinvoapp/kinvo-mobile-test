import React from 'react';
import If from '../If'
import { 
  Wrapper, 
  WrapperIcon, 
  WrapperText, 
  Title, 
  Description,
  WrapperNotification,
  ButtonStateStyled
} from './styles';


type Props = {
  source?: any;
  title: string;
  description: string;
  showButtonState?: boolean;
  buttonPrimary?: boolean;
  goTo?: () => void;
}
const WrapperCard: React.FC<Props> = ({
    children,
    source, 
    title, 
    description, 
    showButtonState, 
    buttonPrimary,
    goTo,
    ...rest}) => {
  return (
    <Wrapper {...rest} onPress={goTo}>
      <WrapperIcon>
        {source}
      </WrapperIcon>

      <WrapperText>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </WrapperText>

      <If condition={showButtonState || false}>
        <WrapperNotification>
          <ButtonStateStyled buttonPrimary={buttonPrimary} />
        </WrapperNotification>
      </If>
    </Wrapper>
  );
};

export default WrapperCard;
