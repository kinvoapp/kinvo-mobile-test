import React from 'react';
import {Container, TextTitle, TextSubTitle, ButtonLink, TextButton} from './styles';
import {useNavigation} from '@react-navigation/native'; 


interface ActionProps {
  children: string;
  adress: string;
}

const CardErro: React.FC<ActionProps> = ({children, adress, ...rest}) => {

  const navigation = useNavigation();

  const irSobre = () => {
    navigation.navigate("HomePage");
  };

 return (
 
  <Container {...rest}>
      <TextTitle>Ocorreu um erro.</TextTitle>
      <TextSubTitle>Não foi possivel se conectar ao banco de dados</TextSubTitle>
      <ButtonLink onPress={irSobre}>
        <TextButton>VOLTAR</TextButton>
      </ButtonLink>
  </Container>

);
}

export default CardErro;
