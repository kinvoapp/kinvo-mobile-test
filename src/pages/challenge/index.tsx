import React from 'react';
///components
import KinCardChallenge, {
  IkinChallenge,
} from '../../components/card/card_challenge';
import KinHeader from '../../components/header';

//Assets
import Stock from '../../../assets/icons/stock.svg';
import Fund from '../../../assets/icons/fund.svg';
import Pension from '../../../assets/icons/pension.svg';
//styles
import {Container, ContentCard} from './styles';

interface Imenu extends IkinChallenge {
  redirectPage: string;
}

export default function ChallengePage({navigation}): JSX.Element {
  const challengesMenu: Imenu[] = [
    {
      title: 'Ações',
      subtitle: 'Nacionais',
      Icon: Stock,
      redirectPage: 'Stock',
    },
    {
      title: 'Fundos',
      subtitle: 'De investimentos',
      Icon: Fund,
      redirectPage: 'Fund',
    },
    {
      title: 'previdências',
      subtitle: 'Privadas',
      Icon: Pension,
      redirectPage: 'Pension',
    },
  ];
  return (
    <Container>
      <KinHeader title="Desafio" />
      {challengesMenu.map((e, index) => (
        <ContentCard
          key={index}
          activeOpacity={0.6}
          underlayColor=""
          onPress={() => navigation.navigate(e.redirectPage)}>
          <KinCardChallenge
            title={e.title}
            Icon={e.Icon}
            subtitle={e.subtitle}
          />
        </ContentCard>
      ))}
    </Container>
  );
}
