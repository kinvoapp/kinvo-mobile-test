import React from 'react';
// import {RectButtonProperties} from 'react-native-gesture-handler';
import {Img, Container} from './styles';
import BackButtonImg from '../../assets/backButton.png';
import {useNavigation} from '@react-navigation/native';


const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const goHome = (adress: string) => {
    navigation.navigate(adress);
  };

  return(
  <>
    <Container onPress={() => goHome('HomePage')}>
      <Img source={BackButtonImg} />
    </Container>
  </>
);
  };

export default BackButton;
