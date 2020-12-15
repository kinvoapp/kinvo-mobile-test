import React from 'react';
import { Wrapper, HeaderStyled, WrapperCards, WrapperCardStyled } from './styles';

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
      {options.map((item, index) => (
        <WrapperCards key={index}>
          <WrapperCardStyled 
            goTo={item.onPress} 
            source={item.icon} 
            title={item.title} 
            description={item.description}
          />
        </WrapperCards>
      ))}
    </Wrapper>
  );
};

export default Home;
