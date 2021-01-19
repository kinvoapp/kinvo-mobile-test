import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container, ButtonTextTitle, ButtonTextSubTitle, ContainerIcon, ContainerText, Img} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  img: string;
  title: string;
}

const ButtonHome: React.FC<ButtonProps> = ({children, img, title, ...rest}) => (
  
  <Container {...rest}>
    
    <ContainerIcon>
      <Img source={img} />
    </ContainerIcon>

    <ContainerText>
        <ButtonTextTitle>
          {title}
        </ButtonTextTitle>

        <ButtonTextSubTitle>
          {children}
        </ButtonTextSubTitle>
    </ContainerText>
      
  </Container>
);

export default ButtonHome;
