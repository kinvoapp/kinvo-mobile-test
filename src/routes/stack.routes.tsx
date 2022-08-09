import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Challenge } from '../screens/Challenge'
import { Funds } from '../screens/Funds'
import { Pension } from '../screens/Pension'
import { Stocks } from '../screens/Stocks'

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: '#6F4DBF'
      }}>
      <Screen
        name="Challenge"
        options={{
          title: "Desafio"
        }}
        component={Challenge}
      />

      <Screen
        name="Funds"
        options={{
          title: "Fundos"
        }}
        component={Funds}
      />

      <Screen
        name="Pensions"
        options={{
          title: "Previdências"
        }}
        component={Pension}
      />

      <Screen
        name="Stocks"
        options={{
          title: "Ações"
        }}
        component={Stocks}
      />
    </Navigator>
  )
}