import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routing, { setTopLevelNavigator } from './actions';
import { RoutesPrivate, RoutesPublic, StacksRoutes } from './routing';
import { PublicStack } from './stacks';

const MainStack = createStackNavigator();

type Props = {
  token: boolean;
};

const Navigation = ({ token }: Props): React.ReactElement => {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <MainStack.Navigator
        headerMode="none"
        initialRouteName={token ? StacksRoutes.PRIVATE : StacksRoutes.PUBLIC}>
        <MainStack.Screen name={StacksRoutes.PUBLIC} component={PublicStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export { routing, RoutesPrivate, RoutesPublic, useRoute };
export default Navigation;
