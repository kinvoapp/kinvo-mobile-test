import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CardHome } from '../../components';

import { Container } from './styles';
import Actions from '../../assets/svgs/actions.svg';
import Funds from '../../assets/svgs/funds.svg';
import Pensions from '../../assets/svgs/pensions.svg';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CardHome
        onPress={() => navigation.navigate('Ações')}
        title="Ações"
        subtitle="Nacionais"
        Icon={() => <Actions />}
      />

      <CardHome
        onPress={() => navigation.navigate('Fundos')}
        title="Fundos"
        subtitle="De investimento"
        tag
        Icon={() => <Funds />}
      />

      <CardHome
        title="Previdências"
        subtitle="Privada"
        Icon={() => <Pensions />}
      />
    </Container>
  );
};

export default Home;
