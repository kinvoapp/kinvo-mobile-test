import React from 'react';
import { CardActive, Header, IconName } from '~components';

import * as Component from './DesafioScreen.styles';

type AtivoProps = {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  nameScreen: ScreenType;
  slogan: boolean;
};

export const actives: AtivoProps[] = [
  {
    id: 1,
    title: 'Ações',
    description: 'Nacionais',
    icon: 'IconAction',
    slogan: false,
    nameScreen: 'AcoesScreen',
  },
  {
    id: 2,
    title: 'Fundos',
    description: 'De investimentos',
    icon: 'IconWalletSmall',
    slogan: true,
    nameScreen: 'AcoesScreen',
  },
  {
    id: 3,
    title: 'Previdências',
    description: 'Privadas',
    icon: 'IconPensionMoney',
    slogan: false,
    nameScreen: 'PensionScreen',
  },
];

type ScreenType = 'DesafioScreen' | 'AcoesScreen' | 'PensionScreen';

export function DesafioScreen({ navigation }) {
  function handleNavigation(screen: ScreenType) {
    navigation.navigate(screen);
  }

  return (
    <>
      <Header title="Desafios" hasArrowLeft={false} />

      <Component.Container>
        {actives.map(
          ({ slogan: slogan, id, title, description, icon, nameScreen }) => (
            <CardActive
              key={id.toString()}
              title={title}
              description={description}
              icon={icon}
              slogan={slogan}
              onPress={() => handleNavigation(nameScreen)}
            />
          ),
        )}
      </Component.Container>
    </>
  );
}
