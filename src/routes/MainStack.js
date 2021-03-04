import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Home from '~/screens/Home';
import Acoes from '~/screens/Acoes';
import Fundos from '~/screens/Fundos';
import Previdencias from '~/screens/Previdencias';

// Icons
import Header from '~/components/Header';

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const options = {
    header: (props) => <Header {...props} />,
  };
  return (
    <MainStack.Navigator screenOptions={options}>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Desafio' }}
      />
      <MainStack.Screen
        name="Acoes"
        component={Acoes}
        options={{ title: 'Ações' }}
      />
      <MainStack.Screen
        name="Fundos"
        component={Fundos}
        options={{ title: 'Fundos' }}
      />
      <MainStack.Screen
        name="Previdencias"
        component={Previdencias}
        options={{ title: 'Previdencias' }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
