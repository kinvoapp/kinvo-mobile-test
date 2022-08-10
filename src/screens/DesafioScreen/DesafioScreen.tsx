import React from 'react';
import { CardActive, Header, IconName } from '~components';

import * as Component from './DesafioScreen.styles';

type AtivoProps = {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  nameScreen: ScreenType;
  isNew: boolean;
};

export const ativos: AtivoProps[] = [
  {
    id: 1,
    title: 'Ações',
    description: 'Nacionais',
    icon: 'IconAction',
    isNew: false,
    nameScreen: 'AcoesScreens',
  },
  {
    id: 2,
    title: 'Fundos',
    description: 'De investimentos',
    icon: 'IconWalletSmall',
    isNew: true,
    nameScreen: 'AcoesScreens',
  },
  {
    id: 3,
    title: 'Previdências',
    description: 'Privadas',
    icon: 'IconPensionMoney',
    isNew: false,
    nameScreen: 'DesafioScreen',
  },
];

type ScreenType = 'DesafioScreen' | 'AcoesScreens';

export function DesafioScreen({ navigation }) {
  function handleNavigation(screen: ScreenType) {
    navigation.navigate(screen);
  }

  return (
    <>
      <Header>Desafios</Header>
      <Component.Container>
        {ativos.map(({ isNew, id, title, description, icon, nameScreen }) => (
          <CardActive
            key={id}
            title={title}
            description={description}
            icon={icon}
            isNew={isNew}
            onPress={() => handleNavigation(nameScreen)}
          />
        ))}
      </Component.Container>
    </>
  );
}
