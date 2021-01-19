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
// import heartImg2 from '../../assets/heart2.png';
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';
import FavoritesButton from '../FavoritesButton';

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
      {/* <Img source={heartImg2} /> */}
      <FavoritesButton />
      <TextMinimo>R$ {minimumValue}</TextMinimo>
      <TextRentabilidade style={profitability <= 0 ? styles.textDown : styles.textUp} >
          <Icon name={profitability <= 0 ? 'arrow-down' : 'arrow-up' }/>
          {profitability}
      </TextRentabilidade>
    </ContainerRight>
  </Container>

);

export default CardActions;

const styles = StyleSheet.create({
    textUp:{
      color: "#AED335"
    },
    textDown:{
      color: "#E85D1F"
    }
})