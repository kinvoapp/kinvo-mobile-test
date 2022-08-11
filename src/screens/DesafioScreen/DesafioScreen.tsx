import React, { useEffect } from 'react';
import { CardActive, Header, IconName } from '~components';
import { useNetwork } from '~hooks';
import { getStocks } from '~services/client';

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
    nameScreen: 'AcoesScreen',
  },
  {
    id: 2,
    title: 'Fundos',
    description: 'De investimentos',
    icon: 'IconWalletSmall',
    isNew: true,
    nameScreen: 'AcoesScreen',
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

type ScreenType = 'DesafioScreen' | 'AcoesScreen';

export function DesafioScreen({ navigation }) {
  const { execute } = useNetwork();

  useEffect(() => {
    execute(async () => {
      const response = await getStocks();

      console.log({ response });
    });
  }, [execute]);

  function handleNavigation(screen: ScreenType) {
    navigation.navigate(screen);
  }

  return (
    <>
      <Header title="Desafios" hasArrowLeft={false} />

      <Component.Container>
        {ativos.map(({ isNew, id, title, description, icon, nameScreen }) => (
          <CardActive
            key={id.toString()}
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
