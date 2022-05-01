import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import { Header } from '~/components';
import {
  FundsScreen,
  HomeScreen,
  PensionsScreen,
  StocksScreen,
} from '~/scenes';

const { Navigator, Group, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Desafio',
          header: (props: NativeStackHeaderProps) => (
            <Header {...props} hideArrow />
          ),
        }}
      />

      <Group
        screenOptions={{
          presentation: 'fullScreenModal',
          headerShown: true,
        }}
      >
        <Screen
          name="Stocks"
          component={StocksScreen}
          options={{
            title: 'Ações',
            header: (props: NativeStackHeaderProps) => <Header {...props} />,
          }}
        />

        <Screen
          name="Funds"
          component={FundsScreen}
          options={{
            title: 'Fundos',
            header: (props: NativeStackHeaderProps) => <Header {...props} />,
          }}
        />

        <Screen
          name="Pension"
          component={PensionsScreen}
          options={{
            title: 'Previdências',
            header: (props: NativeStackHeaderProps) => <Header {...props} />,
          }}
        />
      </Group>
    </Navigator>
  );
};

export default AppNavigation;
