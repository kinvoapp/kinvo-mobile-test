import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Acoes from '../pages/Acoes';
import Desafio from '../pages/Desafio';
import Fundos from '../pages/Fundos';
import Previdencias from '../pages/Previdencias';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{headerShown: false}}>
    <App.Screen name="Desafio" component={Desafio} />
    <App.Screen name="Acoes" component={Acoes} />
    <App.Screen name="Fundos" component={Fundos} />
    <App.Screen name="Previdencias" component={Previdencias} />
  </App.Navigator>
);

export default AppRoutes;
