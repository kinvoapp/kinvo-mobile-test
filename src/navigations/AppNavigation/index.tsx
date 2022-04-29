import React from 'react';
import { View } from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import { Header } from '~/components';
import { Home } from '~/scenes';

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
          component={BlankPage}
          options={{
            title: 'Ações',
            header: (props: NativeStackHeaderProps) => (
              <Header {...props} hideArrow />
            ),
          }}
        />
      </Group>
    </Navigator>
  );
};

export default AppNavigation;
