
import { FlatList } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native'
import { NavButton } from '../../components/NavButton';

import FundsIcon from '../../assets/icons/fundsIcon.svg';
import PensionsIcon from '../../assets/icons/pensionsIcon.svg';
import StocksIcon from '../../assets/icons/stocksIcon.svg';


const navData = [
  {
    slug: 'Stocks',
    title: 'Ações',
    text: 'Nacionais',
    icon: <StocksIcon />
  },
  {
    slug: 'Funds',
    title: 'Fundos',
    text: 'De investimento',
    icon: <FundsIcon />

  },
  {
    slug: 'Pensions',
    title: 'Previdências',
    text: 'Privadas',
    icon: <PensionsIcon />

  },
]

export function Challenge() {

  const navigation = useNavigation();

  return (
    <Container>

      {
        <FlatList
          data={navData}
          renderItem={({ item }) => {
            return (
              <NavButton title={item.title} text={item.text} icon={item.icon} handleRedirect={() => {
                navigation.navigate(item.slug);
              }} />

            );
          }}
        />
      }



    </Container>
  );
}
