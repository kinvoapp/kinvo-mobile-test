import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Wrapper, IconActions, HeaderStyled, WrapperCards, WrapperCardStyled } from './styles';
import ButtonState from '~/components/ButtonState'

type PropsOptions = {
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
}

type Props = {
  options: PropsOptions[]
}

const Home: React.FC<Props> = ({options}) => {
  return (
    <Wrapper>
      <HeaderStyled title="Desafio" />
      {options.map((item) => (
        <WrapperCards>
          <WrapperCardStyled 
            goTo={item.onPress} 
            showButtonState 
            // source={item.icon} 
            title={item.title} 
            description={item.description}
          />
        </WrapperCards>
      ))}
    </Wrapper>
  );
};

export default Home;
