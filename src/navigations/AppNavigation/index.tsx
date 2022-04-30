import React from 'react';
import { View } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import { Header } from '~/components';
import { Home, Pensions, Stocks } from '~/scenes';

const { Navigator, Group, Screen } = createNativeStackNavigator();

function BlankPage() {
  return <View />;
}

const AppNavigation = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
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
          component={Stocks}
          options={{
            title: 'Ações',
            header: (props: NativeStackHeaderProps) => <Header {...props} />,
          }}
        />

        <Screen
          name="Funds"
          component={BlankPage}
          options={{
            title: 'Fundos',
            header: (props: NativeStackHeaderProps) => <Header {...props} />,
          }}
        />

        <Screen
          name="Pension"
          component={Pensions}
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
