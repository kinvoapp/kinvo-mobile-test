import React from 'react';
// import {RectButtonProperties} from 'react-native-gesture-handler';
import {Container,
    TextTitle,
    TextSubTitle,
    Containerleft,
    ContainerRight,
    Text,
    TextMinimo,
    TextRentabilidade,
     Img} from './styles';
import heartImg from '../../assets/heart.png';

// import CardActions from '../'

interface ActionProps {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}


const CardActions: React.FC<ActionProps> = ({children, name, ticker, minimumValue, profitability, ...rest}) => (

  <Container {...rest}>
    <Containerleft>
      <TextTitle>{name}</TextTitle>
      <TextSubTitle>{ticker}</TextSubTitle>

      <Text>Valor mínimo:</Text>
      <Text>Rentabilidade:</Text>
    </Containerleft>

    <ContainerRight>
      <Img source={heartImg} />
      <TextMinimo>R$ {minimumValue}</TextMinimo>
      <TextRentabilidade>{profitability}</TextRentabilidade>
    </ContainerRight>
  </Container>


);

export default CardActions;
