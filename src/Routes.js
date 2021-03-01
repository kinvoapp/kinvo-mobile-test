import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import StocksScreen from './screens/StocksScreen'
import FundsScreen from './screens/FundsScreen'
import PensionsScreen from './screens/PensionsScreen'
import { HOME, STOCKS, FUNDS, PENSIONS } from './utils/consts/routeNames'

const Stack = createStackNavigator()

function Routes() {
	const theme = useContext(ThemeContext)

	return (
		<NavigationContainer>
			<StatusBar
				barStyle='dark-content'
				backgroundColor={theme.statusBarColor}
			/>
			<Stack.Navigator
				initialRouteName={HOME}
				screenOptions={{
					headerStyle: {
						backgroundColor: theme.headerColor,
						height: 100
					},
					headerTintColor: theme.headerTintColor,
					headerTitleStyle: {
						fontSize: 20,
						fontFamily: 'Montserrat',
						fontWeight: 'bold'
					}
				}}>
				<Stack.Screen
					name={HOME}
					component={HomeScreen}
					options={{
						title: 'Desafio'
					}}
				/>
				<Stack.Screen
					name={STOCKS}
					component={StocksScreen}
					options={{
						title: 'Ações'
					}}
				/>
				<Stack.Screen name={FUNDS} component={FundsScreen} />
				<Stack.Screen name={PENSIONS} component={PensionsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes
