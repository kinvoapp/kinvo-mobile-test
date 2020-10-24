// import React from 'react';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Products from '../pages/Products';

// const Tab = createMaterialTopTabNavigator();

// const TopTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Produto" component={Products} />
//     </Tab.Navigator>
//   );
// };

// export default TopTab;

// import { createStackNavigator } from '@react-navigation/stack';

// import ProductPage from '../pages/Products';
// import Wallet from '../pages/Wallet';
// import AccountStatement from '../pages/AccountStatement';

// const Stack = createStackNavigator();

// const ProductRoutes: React.FC = () => (
//   <Stack.Navigator initialRouteName="Produtos" screenOptions={screenOptions}>
//     <Stack.Screen
//       name="Carteira"
//       component={Wallet}
//       options={{ title: 'My home' }}
//     />
//     <Stack.Screen name="Produtos" component={ProductPage} />
//     <Stack.Screen name="Extrato" component={AccountStatement} />
//   </Stack.Navigator>
// );

// const screenOptions = {
//   headerTintColor: '#788083',
//   cardStyle: { backgroundColor: '#fff' },
//   headerStyle: {
//     backgroundColor: '#fff',
//     elevation: 0,
//     shadowOpacity: 0,
//     borderBottomWidth: 0,
//   },
// };

// export default ProductRoutes;
