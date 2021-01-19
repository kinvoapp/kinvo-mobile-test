import React from 'react';
// import {RectButtonProperties} from 'react-native-gesture-handler';
import {Img, Container} from './styles';
import heartImg2 from '../../assets/heart2.png';
// import {Alert} from 'react-native';

const FavoritesButton: React.FC = () => {

  // const handleFavorites = (teste) => {
  //   alert(teste);
  // }

  return(
  <>
    {/* <Container onPress={(item) => handleFavorites(item)}> */}
    <Container >
      <Img source={heartImg2} />
    </Container>
  </>
);
  };

export default FavoritesButton;
