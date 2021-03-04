import React, { useCallback } from 'react';

// Components
import Card from '~/components/Card';

// Styles
import { Container } from './styles';

// Icons
import acoesIcon from '~/assets/images/acoes-icon.png';
import fundosIcon from '~/assets/images/fundos-icon.png';
import previdenciasIcon from '~/assets/images/previdencias-icon.png';

const Home = () => {
  const cards = [
    {
      id: 1,
      icon: acoesIcon,
      title: 'Ações',
      subtitle: 'Nacionais',
      route: 'Acoes',
    },
    {
      id: 2,
      icon: fundosIcon,
      title: 'Fundos',
      subtitle: 'De investimento',
      isNew: true,
      route: 'Fundos',
    },
    {
      id: 3,
      icon: previdenciasIcon,
      title: 'Previdencias',
      subtitle: 'Privadas',
      route: 'Previdencias',
    },
  ];

  const renderCard = useCallback(
    (data, idx) => <Card key={data.id} data={data} />,
    [],
  );

  return <Container>{cards.map(renderCard)}</Container>;
};

export default Home;
